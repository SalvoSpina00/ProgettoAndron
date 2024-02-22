import { Object, Property } from 'fabric-contract-api';
import * as yup from 'yup';

@Object()
export class Settings {
    
    @Property()
    public readonly type: string = "settings";

    @Property()
    public ratio: number;

    @Property()
    public rewardEts: number;

    @Property()
    public andronGeneration: number


    constructor(variables:{ratio:number, rewardEts:number, andronGeneration:number}){
        //Controlli
        this.ratio=variables.ratio
        this.rewardEts=variables.rewardEts
        this.andronGeneration=variables.andronGeneration
        Settings.validate(this)
    }

    public static validate(settings){
        const schema = yup.object().shape({
            type: yup.string().required().equals(["settings"]),
            ratio: yup.number().integer().required().min(1),
            rewardEts: yup.number().integer().required().min(1).max(100),
            andronGeneration: yup.number().integer().required().min(1)
        }).required()
        schema.validateSync(settings);
    }

}