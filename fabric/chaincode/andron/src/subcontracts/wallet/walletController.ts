import { Context, Info, Transaction } from 'fabric-contract-api';
import { ContractExtension } from "../../utility/contractExtension";

//!Assets
import { AndronHistory } from '../history/assets/andronHistory';
import { Settings } from '../settings/assets/settings';
import { User } from './assets/user';
import { Wallet } from './assets/wallet';

import { Status } from '../../utility/assets';
import { ValidationError } from 'yup';


@Info({title: 'Wallet', description: 'Portafoglio degli utenti'})
export class walletController extends ContractExtension{

  constructor(){
    //* Prefisso invoke e type dell'asset
    super("wallet")
  }

  @Transaction(true)
  public async createWallet(ctx: Context, param: string): Promise<Object> {
    try{
      let params = JSON.parse(param)  

      let user : User = new User(params.user.nome, params.user.cognome, params.user.account);

      //!Controllo che non esista un altro portafoglio con lo stesso ID
      let other : Wallet = await this.get(ctx,params.walletID) as Wallet
      if(other){
          return {status: Status.Error, message:`Esiste già un portafoglio per l'utente ${params.walletID}`}
      }

      //!Recupero le settings con le informazioni sulla quantità di andron da generare all'iscrizione
      let andronGeneration : number = (JSON.parse(Buffer.from(await ctx.stub.getState("settings-Andron")).toString('utf8')) as Settings).andronGeneration
      
      //!Creazione portafoglio e validazione dei dati
      let wallet = new Wallet(params.walletID, user, andronGeneration)

      //!Creazione storico di generazione della moneta e validazione dati
      let causale = `Creazione del portafoglio dell'utente ${params.walletID} \n Dati Anagrafici: ${user}`
      let andronHistory = new AndronHistory(andronGeneration,wallet.id, causale, JSON.stringify(ctx.stub.getTxTimestamp()),true)

      return Promise.all([
      ctx.stub.putState(wallet.id, Buffer.from(JSON.stringify(wallet))),
      ctx.stub.putState(`andronHistory-${wallet.id}`, Buffer.from(JSON.stringify(andronHistory)))  
      ])
      .then(()=> {return {status: Status.Success , message:"Operazione effettuata"}})
    }
    catch (error){
      return {status: Status.Error , message: error instanceof ValidationError ? error.errors : error }
    }
  }

  @Transaction(true)
  public async reward(ctx: Context, param: string): Promise<Object> {
    try{
      // params => { ets: string, hour: number, service : string, user: string}
      let params = JSON.parse(param) 

      //! Le impostazioni esistono?
      let settings : Settings = (JSON.parse(Buffer.from(await ctx.stub.getState("settings-Andron")).toString('utf8')) as Settings)
      if (!settings || !settings.type){
        return {status: Status.Error, message:"Non sono presenti le impostazioni di Andron"}
      }


      //! Il portafoglio esiste? Fa riferimento ad un utente?
      let userWallet : Wallet = await this.get(ctx, params.user) as Wallet
      if (!userWallet || !userWallet.id){
        return {status: Status.Error, message:`Il portafoglio dell'utente ${params.user} non esiste`}
      }
      else if (userWallet.owner.account!="utente"){
        return {status: Status.Error, message:`L'identificativo ${params.user} non fa riferimento ad un utente`}
      }

      //! Idem per l'ets
      let etsWallet : Wallet = await this.get(ctx, params.ets) as Wallet
      if (!etsWallet || !etsWallet.id){
        return {status: Status.Error, message:`Il portafoglio dell'ETS ${params.ets} non esiste`}
      }
      else if (etsWallet.owner.account!="ets"){
        return {status: Status.Error, message:`L'identificativo ${params.ets} non fa riferimento ad un ETS`}
      }
      
      let otherUserReward : AndronHistory = await this.getAsset(ctx,`andronHistory`,`${userWallet.id}-${params.service}`) as AndronHistory
      let otherEtsReward : AndronHistory = await this.getAsset(ctx,`andronHistory`,`${etsWallet.id}-${params.service}`) as AndronHistory
      if(otherUserReward || otherEtsReward){
        return {status: Status.Error, message:`Esiste già un reward per l'utente ${userWallet.id} e l'ets ${etsWallet.id} per il servizio ${params.service}`}
      }

      let userReward : number= Math.floor((params.hour as number) * settings.andronGeneration)
      let etsReward :number = Math.floor( (userReward * settings.rewardEts)/100)

      let timestamp= JSON.stringify(ctx.stub.getTxTimestamp())
      let userRewardReason=`Premio all'utente ${params.user} per l'esecuzione del servizio alla comunità con identificativo ${params.service}`
      let userRewardGeneration = new AndronHistory(userReward,userWallet.id,userRewardReason,timestamp,false)

      let etsRewardReason=`Premio all'ETS ${params.ets} per la conferma dell'esecuzione del servizio alla comunità con identificativo ${params.service} fornito dall'utente ${params.user}`
      let etsRewardGeneration = new AndronHistory(etsReward,etsWallet.id,etsRewardReason,timestamp,false)

      userWallet.andron+=userReward
      etsWallet.andron+=etsReward

      Wallet.validate(userWallet)
      Wallet.validate(etsWallet)

      await ctx.stub.putState(userWallet.id, Buffer.from(JSON.stringify(userWallet)))
      await ctx.stub.putState(etsWallet.id, Buffer.from(JSON.stringify(etsWallet)))
      await ctx.stub.putState(`andronHistory-${userWallet.id}-${params.service}`, Buffer.from(JSON.stringify(userRewardGeneration)))
      await ctx.stub.putState(`andronHistory-${etsWallet.id}-${params.service}`, Buffer.from(JSON.stringify(etsRewardGeneration)))
      return {status: Status.Success, message:"Operazione effettuata"} 
    }
    catch (error){
      return {status: Status.Error , message: (error instanceof ValidationError ? error.errors : error) }
    }
  }

}
