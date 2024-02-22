import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AppComponent } from 'src/app/app.component';
import { RequestService } from 'src/app/services/request.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { PluginService } from 'src/app/services/plugin.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage {
  errore: string="";
  errorep: string="";
  imgSrc:any;
  foto:any;
  
  //#region getter
  get telefono(){
    return this.editProfileUserForm.get("telefono")
  }
  get email(){
    return this.editProfileUserForm.get("email")
  }
  get stato(){
    return this.editProfileUserForm.get("stato")
  }
  get regione(){
    return this.editProfileUserForm.get("regione")
  }
  get citta(){
    return this.editProfileUserForm.get("citta")
  }
  get via(){
    return this.editProfileUserForm.get("via")
  }
  get cap(){
    return this.editProfileUserForm.get("cap")
  }
 //#endregion 
  
 varLength={
    email :    { min: 5, max: 30},
    stato   :  { min: 5, max: 20},
    regione :  { min: 5, max: 20},
    citta :    { min: 5, max: 30},
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

  editProfileUserForm = this.formBuilder.group({
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

  constructor(private plugin: PluginService, private storage: Storage, private alertController: AlertController, private app: AppComponent, private request: RequestService, private utilities: UtilitiesService, private formBuilder: FormBuilder){ 
    storage.get('anagraficaJson').then((val) => {
      if (val["foto"] == null){
        this.imgSrc = this.utilities.user
      }
      else{
        this.imgSrc = 'data:image/jpeg;base64,' + val["foto"] 
      }
      this.telefono.setValue(val.tel)
      this.email.setValue(val.email)
      this.stato.setValue(val.stato)
      this.regione.setValue(val.regione)
      this.citta.setValue(val.citta)
      this.via.setValue(val.via)
      this.cap.setValue(val.cap)      
    });
  }
  

  submit(){

    (<any>Object).values(this.editProfileUserForm.controls).forEach(control => {
        control.markAsTouched();
    })
    if(!this.editProfileUserForm.valid){
      return
    }

    let data={
      _telefono:      this.editProfileUserForm.value.telefono,
      _mail:          this.editProfileUserForm.value.email,
      _stato:         this.editProfileUserForm.value.stato,
      _regione:       this.editProfileUserForm.value.regione,
      _citta:         this.editProfileUserForm.value.citta,
      _via:           this.editProfileUserForm.value.via,
      _cap:           this.editProfileUserForm.value.cap,
    }
    
    this.request.put({
      path:"/info",
      data:data,
      handler:()=>{
        this.utilities.simplyAlert({
          operation:()=>{

            this.request.get({
              path:"/info",

              handler: (response)=>{
                this.storage.set("anagraficaJson", response)
              
              },

              error: () =>{
                this.utilities.alertError({})
              }
            })
          },
          header:"Operazione effettuata",
          message:"Le modifiche sono state apportate",
        })
      },
      error:()=>{
        this.utilities.alertError({})
      }
    })
    
  }
  
  async cambiaPass(){
    const alert = await this.alertController.create({
      header: "Attenzione",
      message: "Inserire nuova password e la conferma della password. Minimo 8 caratteri, una lettera maiuscola, una minuscola, un numero e un carattere speciale, massimo 30 caratteri.",
      inputs: [
        {
          name: 'vecchiapassword',
          type: 'password',
          placeholder: 'Vecchia password'
        },
        {
          name: 'password',
          type: 'password',
          placeholder: 'Nuova password'
        },
        {
          name: 'check',
          type: 'password',
          placeholder: 'Conferma password'
        }],
      buttons: [
        {
          text: 'Annulla',
          role: 'cancel',
        },
        {
          text: 'Ok',
          handler: data => {
            if (!(data.password && data.check && data.vecchiapassword)){
              this.errorep="Compila tutti i campi"
              return
            }

            let regexPass = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,30}$');
            if(!regexPass.test(data.password)){
              this.errorep="Minimo 8 caratteri, una lettera maiuscola, una minuscola, un numero e un carattere speciale, massimo 30 caratteri"
              return
            }

            if(data.password!=data.check){
              this.errorep="Le password non coincidono"
              return 
            }
            return this.request.put({
              path:"/info/changePassword",
              data:{
                "_oldpsw": data.vecchiapassword,
                "_newpsw": data.password
              },
              handler:()=>{
                this.utilities.simplyAlert({header:"Operazione effettuata", message:"Il cambio password è stato effettuato correttamente"})
              },
              error:(errore)=>{
                if(errore.status==401){
                  this.errorep="La vecchia password non è corretta"
                }else{
                  this.utilities.alertError({})
                }
              }
            })

          }
        }]
    });
    await alert.present();

  }

  chooseImage($event=null){
    let handler = (imgPath)=>{
      let img=this.imgSrc
      this.imgSrc = 'data:image/jpeg;base64,' + imgPath;
      this.foto = imgPath

      this.utilities.confirmAlert({
        header:"Attenzione",
        message:"Vuoi usare l'immagine selezionata come foto per il profilo?",

        handlerYes:  ()=>{
          this.request.put({
            path: "/info/changeProfilePicture",
            data:{
              foto : this.foto
            },
            handler:(response)=>{
              this.storage.set("anagraficaJson", response)
            },
            error:()=>{
              this.utilities.alertError({})
            }
          })
        },

        handlerNo:    ()=>{
          this.imgSrc=img
        }

      })
    }
    
    this.plugin.chooseIm($event,handler)
  }

}

