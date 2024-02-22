import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RequestService } from 'src/app/services/request.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-add-impresa',
  templateUrl: './add-impresa.page.html',
  styleUrls: ['./add-impresa.page.scss'],
})
export class AddImpresaPage{

  avviso = "";

  get username(){
    return this.newImpresaForm.get("username")
  }

  get nome(){
    return this.newImpresaForm.get("nome")
  }

  get tipo(){
    return this.newImpresaForm.get("tipo")
  }

  get iva(){
    return this.newImpresaForm.get("iva")
  }

  get cf(){
    return this.newImpresaForm.get("cf")
  }

  get telefono(){
    return this.newImpresaForm.get("telefono")
  }

  get email(){
    return this.newImpresaForm.get("email")
  }

  get stato(){
    return this.newImpresaForm.get("stato")
  }

  get regione(){
    return this.newImpresaForm.get("regione")
  }

  get citta(){
    return this.newImpresaForm.get("citta")
  }

  get via(){
    return this.newImpresaForm.get("via")
  }

  get cap(){
    return this.newImpresaForm.get("cap")
  }

  varLength={
    username : { min: 5, max: 50},

    nome :     { min: 5, max: 50},
    tipo :     { min: 5, max: 50},
    email :    { min: 5, max: 100},
    stato   :  { min: 5, max: 50},
    regione :  { min: 5, max: 50},
    citta :    { min: 5, max: 50},
    via :      { min: 5, max: 100},
  }
  
  defaultMessages={
    required:"Questo campo è obbligatorio",
    spaces: "Non sono ammessi spazi",
    maxlength: (max) =>{
      return `Massimo ${ max } caratteri`
    },
    minlength: (min) =>{
      return `Minimo ${ min } caratteri`
    }
  }

  public errorMessages = {
    username: [
      { type: "required",  message: this.defaultMessages.required },
      { type: "maxlength", message: this.defaultMessages.maxlength(this.varLength.username.max) },
      { type: "minlength", message: this.defaultMessages.minlength(this.varLength.username.min) },
      { type: "spaces",    message: this.defaultMessages.spaces}
    ],


    nome: [
      { type: "required",  message: this.defaultMessages.required },
      { type: "maxlength", message: this.defaultMessages.maxlength(this.varLength.nome.max) },
      { type: "minlength", message: this.defaultMessages.minlength(this.varLength.nome.min) },
    ],
    tipo: [
      { type: "required",  message: this.defaultMessages.required },
      { type: "maxlength", message: this.defaultMessages.maxlength(this.varLength.tipo.max) },
      { type: "minlength", message: this.defaultMessages.minlength(this.varLength.tipo.min) },
    ],
    iva: [
      { type: "required",  message: this.defaultMessages.required},
      { type: "pattern", message: "Il formato della partita iva non è corretto"}
    ],
    cf: [
      { type: "required",  message: this.defaultMessages.required },
      { type: "invalidCF", message: "Il formato del codice fiscale non è corretto" },
    ],
    telefono: [
      { type: "required",  message: this.defaultMessages.required },
      { type: "pattern",   message: "Il formato del numero di telefono non è corretto" },
    ],
    email: [
      { type: "required",  message: this.defaultMessages.required },
      { type: "maxlength", message: this.defaultMessages.maxlength(this.varLength.email.max) },
      { type: "minlength", message: this.defaultMessages.minlength(this.varLength.email.min) },
      { type: "email",     message: "Il formato dell'email non è corretto" },
    ],
    stato: [
      { type: "required",  message: this.defaultMessages.required },
      { type: "maxlength", message: this.defaultMessages.maxlength(this.varLength.stato.max) },
      { type: "minlength", message: this.defaultMessages.minlength(this.varLength.stato.min) },
    ],
    regione: [
      { type: "required",  message: this.defaultMessages.required },
      { type: "maxlength", message: this.defaultMessages.maxlength(this.varLength.regione.max) },
      { type: "minlength", message: this.defaultMessages.minlength(this.varLength.regione.min) },
    ],
    citta: [
      { type: "required",  message: this.defaultMessages.required },
      { type: "maxlength", message: this.defaultMessages.maxlength(this.varLength.citta.max) },
      { type: "minlength", message: this.defaultMessages.minlength(this.varLength.citta.min) },
    ],
    via: [
      { type: "required",  message: this.defaultMessages.required },
      { type: "maxlength", message: this.defaultMessages.maxlength(this.varLength.via.max) },
      { type: "minlength", message: this.defaultMessages.minlength(this.varLength.via.min) },
    ],
    cap: [
      { type: "required",  message: this.defaultMessages.required },
      { type: "pattern",    message: "Il formato del CAP non è corretto" },
    ],
  }

  

  constructor(private request:RequestService, private utility:UtilityService, private formBuilder:FormBuilder) { }



  newImpresaForm = this.formBuilder.group({
    username: ['', [
                    Validators.required,
                    Validators.maxLength(this.varLength.username.max),
                    Validators.minLength(this.varLength.username.min),
                    this.utility.validatorHasWhiteSpaces // spaces
                  ]
              ],
    nome:     ['', [
                    Validators.required,
                    Validators.maxLength(this.varLength.nome.max),
                    Validators.minLength(this.varLength.nome.min),
                    this.utility.validatorNotEmpty // required
                  ]
              ],
    tipo:     ['', [
                    Validators.required,
                    Validators.maxLength(this.varLength.tipo.max),
                    Validators.minLength(this.varLength.tipo.min),
                    this.utility.validatorNotEmpty // required
                  ]
          ],
    iva:     ['', [
                    Validators.required,
                    Validators.pattern("^[0-9]{11}$")
                  ]
              ],
    cf:       ['', [
                    Validators.required,
                    this.utility.validatorCF //invaliCF
                  ]
              ],
    telefono: ['', [
                    Validators.required,
                    Validators.pattern("[0-9]{10,12}")
                  ]
              ],
    email:    ['', [
                    Validators.required,
                    Validators.maxLength(this.varLength.email.max),
                    Validators.minLength(this.varLength.email.min),
                    Validators.email,
                  ]
              ],
    stato:    ['', [
                    Validators.required,
                    Validators.maxLength(this.varLength.stato.max),
                    Validators.minLength(this.varLength.stato.min),
                    this.utility.validatorNotEmpty
                  ]
              ],
    regione:  ['', [
                    Validators.required,
                    Validators.maxLength(this.varLength.regione.max),
                    Validators.minLength(this.varLength.regione.min),
                    this.utility.validatorNotEmpty
                  ]
              ],
    citta:    ['', [
                    Validators.required,
                    Validators.maxLength(this.varLength.citta.max),
                    Validators.minLength(this.varLength.citta.min),
                    this.utility.validatorNotEmpty
                  ]
              ],
    via:      ['', [
                    Validators.required,
                    Validators.maxLength(this.varLength.via.max),
                    Validators.minLength(this.varLength.via.min),
                    this.utility.validatorNotEmpty
                  ]
              ],
    cap:      ['', [
                    Validators.required,
                    Validators.pattern("[0-9]{5}")
                  ]
              ],
  })
  

  public submit(){

    let password = "Andron" + this.newImpresaForm.value.username + "Andron"

    let data = {
      "_accountType" : "impresa",
      "_username" : this.newImpresaForm.value.username,
      "_password" : password,
      "_nome" : this.newImpresaForm.value.nome,
      "_tipo" : this.newImpresaForm.value.tipo,
      "_iva" : this.newImpresaForm.value.iva,
      "_cf" : this.newImpresaForm.value.cf,
      "_telefono" : this.newImpresaForm.value.telefono,
      "_mail" : this.newImpresaForm.value.email,
      "_stato" : this.newImpresaForm.value.stato,
      "_regione" : this.newImpresaForm.value.regione,
      "_citta" : this.newImpresaForm.value.citta,
      "_via" : this.newImpresaForm.value.via,
      "_cap" : this.newImpresaForm.value.cap,

    }

    this.utility.confirmAlert({
      handlerYes:()=>{
        this.request.post({
          path:"account/impresa",
          data:data,
          handler:()=>{
            this.utility.simplyAlert({
              operation:()=>{
                this.avviso ="La password dell'account appena creato è: " + password
              },
              header:"Operazione Effettuata",
              message:"La password dell'account è " + password + " verrà mostrata fino al cambio pagina per evitare che venga persa."
            })
          },
          error:(error)=>{
            if (error.status==401){
              this.avviso="Username già in uso."
            }
            else{
              this.utility.alertError({})
            }
          }
        })
      },
      header:"Attenzione!",
      message:"Vuoi creare questo account? Se scegli sì fa attenzione alla prossima pagina che mostrerà la password."
    })
  }
}
