import { Context, Info, Transaction } from 'fabric-contract-api';
import { ContractExtension } from '../../utility/contractExtension';

import { Wallet } from '../wallet/assets/wallet';
import { Deposit } from './assets/deposit';
import { TransactionAsset } from '../transaction/assets/transaction';
import { Status } from '../../utility/assets';
import { ValidationError } from 'yup';

@Info({title: 'Deposito di sicurezza', description: 'Deposito degli utenti per le richieste di servizi'})
export class depositController extends ContractExtension{
    
    constructor(){
        super("deposit")
    }

    /*
    @params:{
      depositorID:string,
      allowedWithdrawer:string, 
      amount: number,
      reasonDeposit:string, 
      uuid:string 
    }
    */
    @Transaction(true)
    public async deposit(ctx: Context, param:string): Promise<Object>{
      try{
        let params = JSON.parse(param) 

        //! ammontare valido?
        if((params.amount as number)<0){
          return { status: Status.Error,  message:"L'ammontare del deposito dev'essere un numero intero maggiore di 0"}
        }
        //! Il withdrawer è diverso da chi fa il deposito?
        if(params.allowedWithdrawer == params.depositorID){
          return { status: Status.Error,  message:"L'utente abilitato al ritiro del deposito deve essere diverso da colui che deposita"}
        }

        //! I portafogli esistono? Il saldo è sufficiente?
        let depositorWallet : Wallet = await this.getAsset(ctx, "wallet", params.depositorID,) as Wallet
        if (!depositorWallet || !depositorWallet.id){
          return { status: Status.Error, message:`Il portafoglio ${params.depositorID} non esiste` }
        }else if (depositorWallet.owner.account!="utente"){//!Il richiedente è un utente?
          return {status: Status.Error, message:`L'identificativo ${params.depositorID} non fa riferimento ad un utente`}
        }
        else if(depositorWallet.andron<(params.amount as number)){
          return { status: Status.Error, message:`Saldo insufficiente per effettuare l'operazione. Saldo attuale del portafoglio di ${params.depositorID}: ${depositorWallet.andron}`}
        }

        let withdrawerWallet : Wallet = await this.getAsset(ctx,"wallet", params.allowedWithdrawer,) as Wallet
        if (!withdrawerWallet || !withdrawerWallet.id){
          return { status: Status.Error, message:`Il portafoglio ${params.allowedWithdrawer} non esiste`}
        }else if (withdrawerWallet.owner.account!="utente"){
          return {status: Status.Error, message:`L'identificativo ${params.allowedWithdrawer} non fa riferimento ad un utente`}
        }

        //! Il deposito esiste? 
        let otherDeposit : Deposit = await this.get(ctx,params.uuid) as Deposit
        console.log(otherDeposit)
        if (otherDeposit){
          return { status: Status.Error, message:`Il deposito ${params.uuid} esiste già`}
        }

        //* Creo il deposito, modifico il saldo e salvo le modifiche.
        let deposit : Deposit = new Deposit(params.depositorID,params.reasonDeposit,JSON.stringify(ctx.stub.getTxTimestamp()),params.allowedWithdrawer,(params.amount as number))
        
        depositorWallet.andron-=(params.amount as number)
        Wallet.validate(depositorWallet)

        return Promise.all([
          ctx.stub.putState(`${deposit.type}-${params.uuid}`, Buffer.from(JSON.stringify(deposit))),
          ctx.stub.putState(`${depositorWallet.id}`, Buffer.from(JSON.stringify(depositorWallet))),
        ])
        .then(()=>{return { status: Status.Success, message:`Operazione effettuata, depositati ${params.amount} Andron da ${params.depositorID}`}})
      }
      catch (error){
        return {status: Status.Error , message: (error instanceof ValidationError ? error.errors : error) }
      } 
    }


    /*
    @params:{
      withdrawer: string
      reasonWithdraw: string
    }
    */
    @Transaction(true)
    public async withdrawal(ctx: Context, uuid:string, param:string): Promise<Object>{
      try{
      let params = JSON.parse(param) 

      let deposit : Deposit = await this.get(ctx,uuid) as Deposit
      if(!deposit){
        return { status: Status.Success, message:`Il deposito ${uuid} non esiste`}
      }
      if(deposit.withdrew){
        return { status: Status.Success, message:`Il deposito ${uuid} è già stato ritirato`}
      }
      if(deposit.allowedWithdrawer!=params.withdrawer && deposit.depositor!=params.withdrawer){
        return { status: Status.Error, message:`L'utente ${params.withdrawer} non ha i permessi per ritirare il deposito`}
      }
      
      let withdrawerWallet : Wallet = await this.getAsset(ctx, "wallet", params.withdrawer) as Wallet
      if (!withdrawerWallet || !withdrawerWallet.id){
        return { status: Status.Error, message:`Il portafoglio di ${params.withdrawer} non esiste`}
      }

      deposit.withdrew=true
      deposit.withdrawer=params.withdrawer
      deposit.reasonWithdraw = params.reasonWithdraw
      deposit.timestampWithdraw = JSON.stringify(ctx.stub.getTxTimestamp())
      withdrawerWallet.andron+= (deposit.andron as number)
      
      Deposit.validate(deposit)
      Wallet.validate(withdrawerWallet)

      if(deposit.allowedWithdrawer==params.withdrawer){
        const transaction : TransactionAsset = 
                            new TransactionAsset(
                                deposit.depositor, 
                                deposit.withdrawer, 
                                deposit.andron, 
                                deposit.reasonDeposit+" "+deposit.reasonWithdraw, 
                                JSON.stringify(ctx.stub.getTxTimestamp())
                            )

        return Promise.all([
          ctx.stub.putState(`${deposit.type}-${uuid}`, Buffer.from(JSON.stringify(deposit))),
          ctx.stub.putState(`${withdrawerWallet.id}`,Buffer.from(JSON.stringify(withdrawerWallet))),
          ctx.stub.putState(`${transaction.type}-${uuid}`, Buffer.from(JSON.stringify(transaction)))
        ])
        .then(()=>{return { status: Status.Success, message:`Operazione effettuata. ${params.withdrawer} ha ritirato il deposito ${uuid}`}})
      }

      return Promise.all([
        ctx.stub.putState(`${deposit.type}-${uuid}`, Buffer.from(JSON.stringify(deposit))),
        ctx.stub.putState(`${withdrawerWallet.id}`,Buffer.from(JSON.stringify(withdrawerWallet)))
      ])
      .then(()=>{return { status: Status.Success, message:`Operazione effettuata. ${params.withdrawer} ha ritirato il deposito ${uuid}`} })
    }
    catch (error){
      return {status: Status.Error , message: (error instanceof ValidationError ? error.errors : error) }
    } 
  }
}
