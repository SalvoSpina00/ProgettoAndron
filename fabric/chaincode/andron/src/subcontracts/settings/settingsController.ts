/*
 * SPDX-License-Identifier: Apache-2.0
 */

import { Context, Info, Returns, Transaction } from 'fabric-contract-api';
import { ContractExtension } from '../../utility/contractExtension';
import { Settings } from './assets/settings';
import { Status } from '../../utility/assets';
import { ValidationError } from 'yup';

@Info({title: 'Settings', description: 'Variabili fondamentali di Andron'})

export class settingsController extends ContractExtension {

    constructor(){
        super("settings")
    }

    @Transaction(true)
    public async InitLedger(ctx: Context): Promise<Object> {
        try{
            const asset: Settings = new Settings(
                {
                    ratio:20,
                    rewardEts:50,
                    andronGeneration:20
                }
            )
            await ctx.stub.putState(`${asset.type}-Andron`, Buffer.from(JSON.stringify(asset)));
            return  { status: Status.Success, message:`Impostazioni inizializzate`} 
        }
        catch (error){
            return {status: Status.Error , message:error.errors}
        }
    }

    @Transaction(true)
    public async setRatio(ctx: Context, ratio: number): Promise<Object> {
        try{
            let settings : Settings = JSON.parse(Buffer.from(await ctx.stub.getState("settings-Andron")).toString('utf8'))
            settings.ratio = ratio as number
            Settings.validate(settings)

            ctx.stub.putState(`${settings.type}-Andron`, Buffer.from(JSON.stringify(settings)))
            return { status: Status.Success }
        }
        catch (error){
            return {status: Status.Error , message: (error instanceof ValidationError ? error.errors : error) }
        }
    }

    @Transaction(true)
    public async setRewardEts(ctx: Context, rewardEts: number): Promise<Object> {
        try{
            let settings : Settings = JSON.parse(Buffer.from(await ctx.stub.getState("settings-Andron")).toString('utf8'))
            settings.rewardEts = rewardEts
            Settings.validate(settings)

            ctx.stub.putState(`${settings.type}-Andron`, Buffer.from(JSON.stringify(settings)))
            return  { status: Status.Success }
        }
        catch (error){
            return {status: Status.Error , message: (error instanceof ValidationError ? error.errors : error) }
        }
    }

    @Transaction(true)
    public async setAndronGeneration(ctx: Context, andronGeneration: number): Promise<Object> {
        try{
            let settings : Settings = JSON.parse(Buffer.from(await ctx.stub.getState("settings-Andron")).toString('utf8'))
            settings.andronGeneration = andronGeneration
            Settings.validate(settings)

            ctx.stub.putState(`${settings.type}-Andron`, Buffer.from(JSON.stringify(settings)))
            return  { status: Status.Success }
        }
        catch (error){
            return {status: Status.Error , message: (error instanceof ValidationError ? error.errors : error) }
        }
    }

}
