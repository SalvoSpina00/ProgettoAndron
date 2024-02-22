import { Object, Property } from 'fabric-contract-api';
import * as yup from 'yup';

@Object()
export class Deposit {
    
    @Property()
    public readonly type: string = "deposit";
    //!Depositor
    @Property()
    public readonly depositor: string;

    @Property()
    public readonly reasonDeposit: string;

    @Property()
    public readonly timestampDeposit: string;
    
    //!Withdrawer
    @Property()
    public withdrawer: string;

    @Property()
    public reasonWithdraw: string;

    @Property()
    public timestampWithdraw: string;
    

    //!Altro
    @Property()
    public readonly allowedWithdrawer: string;
    
    @Property()
    public readonly andron: number;
    
    @Property()
    public withdrew: boolean = false;

    constructor(depositor: string, reasonDeposit: string, timestampDeposit: string, allowedWithdrawer: string, andron:number){
        this.depositor=depositor
        this.reasonDeposit=reasonDeposit
        this.timestampDeposit=timestampDeposit
        this.allowedWithdrawer=allowedWithdrawer
        this.andron=andron
        Deposit.validate(this)
    }

    public static validate(deposit){
        const schema = yup.object().shape({
            type: yup.string().required().equals(["deposit"]),
            depositor: yup.string().required().min(3).max(50),
            reasonDeposit:yup.string().required().min(50).max(300),
            timestampDeposit:yup.string().required().min(3).max(50),
            allowedWithdrawer:yup.string().required().min(3).max(50),
            andron:yup.number().required().integer().min(1)
        }).required()

        schema.validateSync(deposit);
    }

}