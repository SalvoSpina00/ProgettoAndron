import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PluginService } from 'src/app/services/plugin.service';
import { RequestService } from 'src/app/services/request.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'app-register-utente',
  templateUrl: './register-utente.page.html',
  styleUrls: ['./register-utente.page.scss'],
})
export class RegisterUtentePage{

  imgSrc: any = this.utilities.img;
  foto: any = null;
  errore: string = "";

  //#region Variables
  get username(){
    return this.registerUserForm.get("username")
  }
  get password(){
    return this.registerUserForm.get("password")
  }
  get check(){
    return this.registerUserForm.get("check")
  }


  get nome(){
    return this.registerUserForm.get("nome")
  }
  get cognome(){
    return this.registerUserForm.get("cognome")
  }
  get data(){
    return this.registerUserForm.get("data")
  }
  get cf(){
    return this.registerUserForm.get("cf")
  }
  get telefono(){
    return this.registerUserForm.get("telefono")
  }
  get email(){
    return this.registerUserForm.get("email")
  }
  get stato(){
    return this.registerUserForm.get("stato")
  }
  get regione(){
    return this.registerUserForm.get("regione")
  }
  get citta(){
    return this.registerUserForm.get("citta")
  }
  get via(){
    return this.registerUserForm.get("via")
  }
  get cap(){
    return this.registerUserForm.get("cap")
  }
  //#endregion
  
  varLength={
    username : { min: 5, max: 50},

    nome :     { min: 5, max: 50},
    cognome :  { min: 5, max: 50},
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
      { type: "required",  message: this.defaultMessages.required},
      { type: "maxlength", message: this.defaultMessages.maxlength(this.varLength.nome.max) },
      { type: "minlength", message: this.defaultMessages.minlength(this.varLength.nome.min) },
    ],
    cognome: [
      { type: "required",  message: this.defaultMessages.required },
      { type: "maxlength", message: this.defaultMessages.maxlength(this.varLength.cognome.max) },
      { type: "minlength", message: this.defaultMessages.minlength(this.varLength.cognome.min) },
    ],
    data: [
      { type: "required",  message: this.defaultMessages.required },
      { type: "minorenne", message: "Devi essere maggiorenne per iscriverti ad Andron" },
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

  registerUserForm = this.formBuilder.group({
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
    cognome:  ['', [
                    Validators.required,
                    Validators.maxLength(this.varLength.cognome.max),
                    Validators.minLength(this.varLength.cognome.min),
                    this.utilities.validatorNotEmpty 
                  ]
              ],
    data:     ['', [
                    Validators.required,
                    this.utilities.validatorDate //minorenne
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


  constructor(private navCtrl: NavController, private plugin : PluginService, private request: RequestService, private utilities: UtilitiesService, private formBuilder: FormBuilder) {}


  public submit(){

    this.errore = "";
    if (this.foto == null){
      this.errore = "Inserisci una tua foto"
      return
    }
    
    let data={
      _username:      this.registerUserForm.value.username,
      _password:      this.registerUserForm.value.password,
      _nome:          this.registerUserForm.value.nome,
      _cognome:       this.registerUserForm.value.cognome,
      _date:          this.registerUserForm.value.data,
      _cf:            this.registerUserForm.value.cf.toUpperCase(),
      _telefono:      this.registerUserForm.value.telefono,
      _mail:          this.registerUserForm.value.email,
      _stato:         this.registerUserForm.value.stato,
      _regione:       this.registerUserForm.value.regione,
      _citta:         this.registerUserForm.value.citta,
      _via:           this.registerUserForm.value.via,
      _cap:           this.registerUserForm.value.cap,
      _foto:          this.foto,
      _accountType:   "utente"
    }

    
    this.request.post({
      path:"/register",
      data:data,

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
            header:"Errore",
            message:"Si è verificato un errore nella registrazione. Riprova più tardi."
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
