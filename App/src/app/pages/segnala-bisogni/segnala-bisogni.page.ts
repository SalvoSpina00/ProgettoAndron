import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { PluginService } from 'src/app/services/plugin.service';
import { RequestService } from 'src/app/services/request.service';
import { UtilitiesService } from 'src/app/services/utilities.service';


@Component({
  selector: 'app-segnala-bisogni',
  templateUrl: './segnala-bisogni.page.html',
  styleUrls: ['./segnala-bisogni.page.scss'],
})
export class SegnalaBisogniPage {

  imgSrc: any;
  imgSend: any;
  position: any;
  errore: string = "";

//#region Getter
  get nome(){
    return this.segnalaBisogniForm.get("nome")
  }

  get descrizione(){
    return this.segnalaBisogniForm.get("descrizione")
  }

  get citta(){
    return this.segnalaBisogniForm.get("citta")
  }

  get via(){
    return this.segnalaBisogniForm.get("via")
  }
//#endregion
  varLength={
    nome :          { min: 5, max: 50},
    descrizione :   { min: 5, max: 500},
    citta :         { min: 5, max: 50},
    via :           { min: 5, max: 100},
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
    nome: [
      { type: "required", message:  this.defaultMessages.required },
      { type: "maxlength", message: this.defaultMessages.maxlength(this.varLength.nome.max) },
      { type: "minlength", message: this.defaultMessages.minlength(this.varLength.nome.min) }
    ],
    descrizione: [
      { type: "required", message:  this.defaultMessages.required },
      { type: "maxlength", message: this.defaultMessages.maxlength(this.varLength.descrizione.max) },
      { type: "minlength", message: this.defaultMessages.minlength(this.varLength.descrizione.min) }

    ],
    citta: [
      { type: "required", message:  this.defaultMessages.required },
      { type: "maxlength", message: this.defaultMessages.maxlength(this.varLength.citta.max) },
      { type: "minlength", message: this.defaultMessages.minlength(this.varLength.citta.min) }
    ],
    via: [
      { type: "required", message:  this.defaultMessages.required },
      { type: "maxlength", message: this.defaultMessages.maxlength(this.varLength.via.max) },
      { type: "minlength", message: this.defaultMessages.minlength(this.varLength.via.min) }
    ],


  }

  segnalaBisogniForm = this.formBuilder.group({
    nome: ['', [Validators.required, Validators.maxLength(this.varLength.nome.max), Validators.minLength(this.varLength.nome.min) ]],
    descrizione: ['', [Validators.required, Validators.maxLength(this.varLength.descrizione.max), Validators.minLength(this.varLength.descrizione.min)]],
    citta: ['', [Validators.required, Validators.maxLength(this.varLength.citta.max), Validators.minLength(this.varLength.citta.min)]],
    via: ['', [Validators.required,Validators.maxLength(this.varLength.via.max), Validators.minLength(this.varLength.via.min)]]
  })
  
  
  constructor(
    private formBuilder : FormBuilder,
    private navCtrl : NavController,
    private plugin : PluginService,
    private request : RequestService,
    private utilities : UtilitiesService
    ) { 
      this.imgSrc= this.utilities.img
  }


  public submit(){

    if (this.imgSend == null){
      this.errore="Inserisci un allegato"
      return 
    }
    //! Test su allegati e posizione.
    this.position = this.position ?? false

    let data = {
      "nome" : this.segnalaBisogniForm.value.nome,
      "descrizione" : this.segnalaBisogniForm.value.descrizione,
      "citta" : this.segnalaBisogniForm.value.citta,
      "indirizzo" : this.segnalaBisogniForm.value.via,
      "allegati": this.imgSend,
      "posizione": this.position
    }
    
    this.request.post({
      path: "/needs",
      data: data,
      handler: (result) => {
        this.utilities.simplyAlert({
          operation:() => {
            this.navCtrl.navigateForward("/home");
          },
          header:"Operazione effettuata",
          message:"Grazie per aver contribuito con la tua segnalazione!"
        })
      },
      error: (err) => {
        this.utilities.alertError({})      }
    })

  }

  getPosition(){
    if (this.position==undefined){
      this.plugin.getCurrentPosition(
        (position)=>{
          this.position = { 
            "latitude": position.coords.latitude,
            "longitude": position.coords.longitude,
          }
        }
      )
    }else{
      this.position=undefined
    }
  }

  chooseImage($event=null){
    this.plugin.chooseIm(
      $event,
      (img)=>{
        this.imgSrc =  'data:image/jpeg;base64,' + img;
        this.imgSend = img;
      }
    )
  }

}
