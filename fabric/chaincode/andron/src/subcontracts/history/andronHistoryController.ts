import { Context, Info, Transaction } from 'fabric-contract-api';
import { ContractExtension } from '../../utility/contractExtension';

import { walletController } from '../wallet/walletController';
import { depositController } from '../deposit/depositController';
import { Status } from '../../utility/assets';

@Info({title: 'Storico Andron', description: 'Storico di generazione della moneta'})
export class andronHistoryController extends ContractExtension{

    constructor(){
        super("andronHistory")
    }

    private reducer = (accumulator, current) => accumulator + current.Record.andron;

    @Transaction(false)
    public async getGeneratedAndron(ctx: Context): Promise<Object>  {
        try{
            const all: any[] = JSON.parse(await this.getAll(ctx))
            let total = 0;
            let generation = 0;
            let reward = 0
            all.forEach(elem=>{
                total += elem.Record.andron
                if(elem.Record.walletGeneration){
                    generation+=elem.Record.andron
                }
                else{
                    reward+=elem.Record.andron
                }
            })
            return  { status: Status.Success, message: {
                total : total,
                generated : generation,
                reward : reward
            } } 
        }
        catch (error){
            return {status: Status.Error , message:error.errors}
        }
    }

    @Transaction(false)
    public async getAvailableAndron(ctx: Context): Promise<Object>  {
        try{
            const wController= new walletController()
            const all: any[] = JSON.parse(await wController.getAll(ctx))
            return  { status: Status.Success, message:`${all.reduce(this.reducer,0)}`}
        }        
        catch (error){
            return {status: Status.Error , message:error.errors}
        } 
    }

    @Transaction(false)
    public async getDepositedAndron(ctx: Context): Promise<Object> {
        try{
            const dController= new depositController()
            const all: any[] = JSON.parse(await dController.getAll(ctx))
            let sum : number = 0
            all.forEach(elem=>{
                sum = elem.Record.withdrew ? sum : sum+(elem.Record.andron as number) 
            })
            return  { status: Status.Success, message:`${sum}`}
        }
        catch (error){
            return {status: Status.Error , message:error.errors}
        }
    }

    @Transaction(false)
    public async get(ctx: Context, assetID:string): Promise<Object> {
        return await super.getAsset(ctx,this.getName(),"wallet-"+assetID)
    }

    @Transaction(false)
    public async getHistory(ctx: Context, assetID:string): Promise<string> {
        return super.getHistory(ctx,"wallet-"+assetID)
    }
}
