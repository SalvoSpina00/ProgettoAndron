import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PluginService } from 'src/app/services/plugin.service';
import { RequestService } from 'src/app/services/request.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-impresa',
  templateUrl: './register-impresa.page.html',
  styleUrls: ['./register-impresa.page.scss'],
})

export class RegisterImpresaPage {

  imgSrc: any = this.utilities.img;
  foto: any = null;
  errore: string = "";

  //#region Variables
  get username(){
    return this.registerImpresaForm.get("username")
  }
  get password(){
    return this.registerImpresaForm.get("password")
  }
  get check(){
    return this.registerImpresaForm.get("check")
  }


  get nome(){
    return this.registerImpresaForm.get("nome")
  }
  get tipo(){
    return this.registerImpresaForm.get("tipo")
  }
  get piva(){
    return this.registerImpresaForm.get("piva")
  }
  get data(){
    return this.registerImpresaForm.get("data")
  }
  get cf(){
    return this.registerImpresaForm.get("cf")
  }
  get telefono(){
    return this.registerImpresaForm.get("telefono")
  }
  get email(){
    return this.registerImpresaForm.get("email")
  }
  get stato(){
    return this.registerImpresaForm.get("stato")
  }
  get regione(){
    return this.registerImpresaForm.get("regione")
  }
  get citta(){
    return this.registerImpresaForm.get("citta")
  }
  get via(){
    return this.registerImpresaForm.get("via")
  }
  get cap(){
    return this.registerImpresaForm.get("cap")
  }
  //#endregion
  
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
    password: [
      { type: "required",  message: this.defaultMessages.required },
      { type: "pattern",   message: "Minimo 8 caratteri, una lettera maiuscola, una minuscola, un numero e un carattere speciale, massimo 30 caratteri"}
    ],
    check: [
      { type: "required",  message: this.defaultMessages.required },
      { type: "different", message: "Le password devono coincidere" },
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
    piva: [
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

  registerImpresaForm = this.formBuilder.group({
    username: ['', [
                    Validators.required,
                    Validators.maxLength(this.varLength.username.max),
                    Validators.minLength(this.varLength.username.min),
                    this.utilities.validatorHasWhiteSpaces // spaces
                  ]
              ],
    password: ['', [
                    Validators.required,
                    Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,30}$")
                  ]
              ],
    check:    ['', [
                    Validators.required, 
                    this.utilities.validatorCheckPassword // different
                  ]
              ],
    
    nome:     ['', [
                    Validators.required,
                    Validators.maxLength(this.varLength.nome.max),
                    Validators.minLength(this.varLength.nome.min),
                    this.utilities.validatorNotEmpty // required
                  ]
              ],
    tipo:     ['', [
                    Validators.required,
                    Validators.maxLength(this.varLength.tipo.max),
                    Validators.minLength(this.varLength.tipo.min),
                    this.utilities.validatorNotEmpty // required
                  ]
          ],
    piva:     ['', [
                    Validators.required,
                    Validators.pattern("^[0-9]{11}$")
                  ]
              ],
    cf:       ['', [
                    Validators.required,
                    this.utilities.validatorCF //invaliCF
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
                    this.utilities.validatorNotEmpty
                  ]
              ],
    regione:  ['', [
                    Validators.required,
                    Validators.maxLength(this.varLength.regione.max),
                    Validators.minLength(this.varLength.regione.min),
                    this.utilities.validatorNotEmpty
                  ]
              ],
    citta:    ['', [
                    Validators.required,
                    Validators.maxLength(this.varLength.citta.max),
                    Validators.minLength(this.varLength.citta.min),
                    this.utilities.validatorNotEmpty
                  ]
              ],
    via:      ['', [
                    Validators.required,
                    Validators.maxLength(this.varLength.via.max),
                    Validators.minLength(this.varLength.via.min),
                    this.utilities.validatorNotEmpty
                  ]
              ],
    cap:      ['', [
                    Validators.required,
                    Validators.pattern("[0-9]{5}")
                  ]
              ],
  })


  constructor(private navCtrl: NavController, private plugin : PluginService, private request : RequestService, private utilities: UtilitiesService, private formBuilder : FormBuilder) {}


  public submit(){

    this.errore = "";
    if (this.foto == null){
      this.errore = "Inserisci una tua foto"
      return
    }
    

    let data={
      _username:      this.registerImpresaForm.value.username,
      _password:      this.registerImpresaForm.value.password,
      _nome:          this.registerImpresaForm.value.nome,
      _tipo :         this.registerImpresaForm.value.tipo,
      _iva :          this.registerImpresaForm.value.piva,
      _cf:            this.registerImpresaForm.value.cf.toUpperCase(),
      _telefono:      this.registerImpresaForm.value.telefono,
      _mail:          this.registerImpresaForm.value.email,
      _stato:         this.registerImpresaForm.value.stato,
      _regione:       this.registerImpresaForm.value.regione,
      _citta:         this.registerImpresaForm.value.citta,
      _via:           this.registerImpresaForm.value.via,
      _cap:           this.registerImpresaForm.value.cap,
      _accountType :  "impresa",
      _foto:          this.foto
    }
    console.log(data)
    
    this.request.post({
      path:"/register",
      data: data,
      handler:()=>{
        this.utilities.simplyAlert({
          operation:()=>{this.navCtrl.navigateForward("/login")},
          header:"Operazione effettuata",
          message:"Registrazione avvenuta con successo."
        })
      },
      error:(error)=>{
        if(error.status==401){
          this.errore="Username già in uso."
        }
        else{
          this.utilities.alertError({
            handler:()=>{this.navCtrl.navigateForward("/login")},
            message:"Errore",
            header:"Si è verificato un errore nella registrazione. Riprova più tardi."
          })
        }
      }
    })
  
    
  }

  chooseImage($event=null){
    this.plugin.chooseIm(
      $event,
      (imgPath)=>{
        this.imgSrc = 'data:image/jpeg;base64,' + imgPath;
        this.foto = imgPath
      }
    )
  }
}
