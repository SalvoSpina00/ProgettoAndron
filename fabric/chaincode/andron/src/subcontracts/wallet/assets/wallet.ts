import { Object, Property } from 'fabric-contract-api';
import { User } from './user';
import * as yup from 'yup';

@Object()
export class Wallet {

    @Property()
    public readonly type: string = "wallet";

    @Property()
    public readonly id: string;

    @Property()
    public readonly owner: User;

    @Property()
    public andron: number;

    constructor(id:string, owner:User, andron:number){
      this.id=`${this.type}-${id}`
      this.owner=owner
      this.andron=andron
      Wallet.validate(this)
    }

    public static validate(wallet) {
      const schema =yup.object().shape({
        type:yup.string().required().equals(["wallet"]),
        id:yup.string().required().min(3).max(50),
        owner: yup.object().required(),
        andron: yup.number().integer().min(0)
      }).required();

      schema.validateSync(wallet)
    }

    
    
}
