import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RequestService } from 'src/app/services/request.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-add-ente',
  templateUrl: './add-ente.page.html',
  styleUrls: ['./add-ente.page.scss'],
})
export class AddEntePage implements OnInit {

  avviso = ""

  get username(){
    return this.newEnteForm.get("username")
  }

  get nome(){
    return this.newEnteForm.get("nome")
  }

  get telefono(){
    return this.newEnteForm.get("telefono")
  }

  get email(){
    return this.newEnteForm.get("email")
  }
  get regione(){
    return this.newEnteForm.get("regione")
  }
  get citta(){
    return this.newEnteForm.get("citta")
  }

  varLength={
    username : { min: 5, max: 50},

    nome :     { min: 5, max: 50},
    email :    { min: 5, max: 100},
    regione :  { min: 5, max: 50},
    citta :    { min: 5, max: 50},
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
  }

  newEnteForm = this.formBuilder.group({
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
  })
  
  
  constructor(private formBuilder : FormBuilder, private utility: UtilityService, private request :RequestService) { }

  ngOnInit() {
  }

  public submit(){

    let password = "Andron" + this.newEnteForm.value.username + "Andron"

    let data = {
      "_accountType" : "ente",
      "_username" : this.newEnteForm.value.username,
      "_password" : password,
      "_nome" : this.newEnteForm.value.nome,
      "_telefono" : this.newEnteForm.value.telefono,
      "_email" : this.newEnteForm.value.email,
      "_regione" : this.newEnteForm.value.regione,
      "_citta" : this.newEnteForm.value.citta,
    }

    this.utility.confirmAlert({
      handlerYes:()=>{
        this.request.post({
          path:"account/ets",
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
          error:()=>{
            this.utility.alertError({})
          }
        })
      },
      header:"Attenzione!",
      message:"Vuoi creare questo account? Se scegli sì fa attenzione alla prossima pagina che mostrerà la password."
    })
  }
}
