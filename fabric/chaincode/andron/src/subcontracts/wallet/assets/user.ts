import { Object, Property} from 'fabric-contract-api';
import { AccountType } from '../../../utility/assets';
import * as yup from 'yup';

@Object()
export class User{

    @Property()
    public readonly nome: string
    
    @Property()
    public readonly cognome: string;
    
    @Property()
    public readonly account: AccountType;

    constructor(nome:string, cognome:string, account:AccountType) {
      this.nome = nome ;
      this.cognome = cognome;
      this.account = account;
      User.validate(this)
    }

    public toString(): string {
      return `
              Nome = ${this.nome} 
              Cognome = ${this.cognome}
              Account = ${this.account}
              `
    }

    public static validate(user){
      const schema= yup.object().shape({
        nome: yup.string().required().min(3).max(50),
        cognome: yup.string().required().min(3).max(50),
        account: yup.string().required().oneOf([AccountType.Ets,AccountType.Impresa,AccountType.Utente])
      }).required()
      
      schema.validateSync(user)
    }
}
