/*
  SPDX-License-Identifier: Apache-2.0
*/

import { Object, Property } from 'fabric-contract-api';
import * as yup from 'yup';

@Object()
export class AndronHistory {
    
    @Property()
    public readonly type: string = "andronHistory";

    @Property()
    public readonly andron: number;

    @Property()
    public readonly walletID: string;

    @Property()
    public readonly reason: string;

    @Property()
    public readonly timestamp: string;

    @Property()
    public readonly walletGeneration: boolean;
  

    constructor(andron: number, walletID: string, reason: string, timestamp: string, walletGeneration:boolean){
      this.andron= andron
      this.walletID= walletID
      this.reason= reason
      this.timestamp= timestamp
      this.walletGeneration = walletGeneration
      AndronHistory.validate(this)
    }

    public static validate(andronHistory){
        const schema = yup.object().shape({
            type: yup.string().required().equals(["andronHistory"]),
            andron: yup.number().required().integer().min(1),
            walletID: yup.string().required().min(3).max(50),
            reason: yup.string().required().min(50).max(300),
            timestamp: yup.string().required().min(3).max(50),
            walletGeneration: yup.bool().required()
            
        }).required()

        schema.validateSync(andronHistory);
    }

}
