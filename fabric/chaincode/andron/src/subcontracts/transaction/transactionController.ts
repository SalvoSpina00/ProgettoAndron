import { Context, Info, Transaction } from 'fabric-contract-api';
import { ContractExtension } from '../../utility/contractExtension';

import { TransactionAsset } from './assets/transaction';
import { Wallet } from '../wallet/assets/wallet';

import { Status } from '../../utility/assets';
import { ValidationError } from 'yup';

@Info({title: 'Transazioni', description: 'Transazioni tra utenti'})
export class transactionController extends ContractExtension{

    constructor(){
        super("transaction")
    }

    /*
    @params : {
        uuid:string  => unique identifier 
        fromID:string => 
        toID:string 
        amount: number
        reason: string 
    }*/
    @Transaction(true)
    public async createTransaction(ctx: Context, param:string ): Promise<Object> {
        try{
            let params = JSON.parse(param)
            if(params.fromID == params.toID){
                return {status: Status.Error, message:`L'emittente non può essere uguale al destinatario della Transazione`}
            }

            let other : TransactionAsset = await this.get(ctx,params.uuid) as TransactionAsset
            if(other){
                return {status: Status.Error, message:`Transazione ${params.uuid} già esistente`}
            }

            let fromWallet : Wallet =await this.getAsset(ctx,"wallet",params.fromID,) as Wallet
            if(!fromWallet || !fromWallet.id){
                return {status: Status.Error, message:`L'utente ${params.fromID} non esiste`}
            }

            let toWallet : Wallet = await this.getAsset(ctx,"wallet",params.toID,) as Wallet
            if(!toWallet || !fromWallet.id){
                return {status: Status.Error, message:`L'utente ${params.toID} non esiste`}
            }

            //!l'ammontare è corretto? 
            if((params.amount as number)<0){
                return {status: Status.Error, message:`L'ammontare dev'essere un numero intero maggiore di 0`}
            }

            //!l'Ammontare è abbastanza? 
            if (fromWallet.andron<(params.amount as number)){
                return {status: Status.Error, message:`Il saldo dell'utente ${params.fromID} non è abbastanza per effettuare l'operazione`}
            }

            //!Aggiorno portafogli
            fromWallet.andron-=(params.amount as number)
            toWallet.andron+=(params.amount as number)

            //!Creo transazione
            const transaction : TransactionAsset = new TransactionAsset(params.fromID,params.toID,params.amount,params.reason,JSON.stringify(ctx.stub.getTxTimestamp()))
            Wallet.validate(fromWallet)
            Wallet.validate(toWallet)
            
            //!Salvo l'esecuzione 
            return Promise.all([
                ctx.stub.putState(`${transaction.type}-${params.uuid}`, Buffer.from(JSON.stringify(transaction))),
                ctx.stub.putState(fromWallet.id, Buffer.from(JSON.stringify(fromWallet))),
                ctx.stub.putState(toWallet.id, Buffer.from(JSON.stringify(toWallet)))
            ])
            .then(()=>{return {status: Status.Success, message:"Operazione effettuata", data: transaction}})   
        }
        catch (error){
            return {status: Status.Error , message: (error instanceof ValidationError ? error.errors : error) }
        }
    }

}
