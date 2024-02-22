import { Object, Property } from 'fabric-contract-api';
import * as yup from 'yup';

@Object()
export class TransactionAsset {
    
    @Property()
    public readonly type: string = "transaction";

    @Property()
    public readonly from: string;

    @Property()
    public readonly to: string;

    @Property()
    public readonly amount: number;

    @Property()
    public readonly reason: string;

    @Property()
    public readonly timestamp: string;


    constructor(from: string, to: string, amount: number, reason: string, timestamp:string){
        this.from=from;
        this.to=to;
        this.amount=amount;
        this.reason=reason;
        this.timestamp=timestamp
        TransactionAsset.validate(this)
    }

    public static validate(transaction){
        const schema = yup.object().shape({
            type: yup.string().required().equals(["transaction"]),
            from: yup.string().required().min(3).max(50),
            to: yup.string().required().min(3).max(50),
            amount: yup.number().integer().min(1),
            reason: yup.string().required().min(50).max(300),
            timestamp: yup.string().required().min(3).max(50),
        }).required()

        schema.validateSync(transaction);
    }
}