import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, } from '@angular/router';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { RequestService } from 'src/app/services/request.service';
import { PluginService } from 'src/app/services/plugin.service';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-servizi-collettivita',
  templateUrl: './servizi-collettivita.page.html',
  styleUrls: ['./servizi-collettivita.page.scss'],
})


export class ServiziCollettivitaPage{


  get ets(){
    return this.ServizioCollettivitaForm.get("ets")
  }

  get bisogno(){
    return this.ServizioCollettivitaForm.get("bisogno")
  }

  get bisognoSegnalato(){
    return this.ServizioCollettivitaForm.get("bisognoSegnalato")
  }

  get description(){
    return this.ServizioCollettivitaForm.get("description")
  }

  get data(){
    return this.ServizioCollettivitaForm.get("data")
  }


  ServizioCollettivitaForm = this.formBuilder.group({
    description: ['', [Validators.required, Validators.maxLength(500), Validators.minLength(5), this.utilities.validatorNotEmpty]],
    data: ['', [Validators.required]],
    ets: ['', [Validators.required]],
    bisogno: [''],
    bisognoSegnalato : [''],
  })
  
  public errorMessages={
    description: [
      { type: "required",  message: "Inserisci una descrizione"},
      { type: "maxLength",  message: "Minimo 5 caratteri"},
      { type: "minLength",  message: "Massimo 500 caratteri"},
      

    ],
    data: [
      { type: "required",  message: "Inserisci la data di esecuzione del servizio"},
    ],
    ets: [
      { type: "required",  message: "Seleziona l'ets per la certificazione"},
    ],
  }

  imgSrc:any = this.utilities.img;
  imgSend:any;

  idBisognoEsterno: string;
  enti : any;
  bisogni : any;
  errore:string;


  constructor(private plugin: PluginService,private route : ActivatedRoute,private navCtrl : NavController, private request: RequestService, private utilities : UtilitiesService, private formBuilder: FormBuilder){
    this.imgSrc= this.utilities.img
    this.bisognoSegnalato.setValue(false)
    let handler= () => {
      this.navCtrl.navigateForward("/home");
    }

    this.request.get({
      path:"/services/community/ets",
      handler:(resp) =>{
        this.enti =resp["_msg"]
      },
      error: () => {
        this.utilities.alertError({handler:handler})
      }
    })

    this.request.get({
      path:"/needs",
      httpParam:{
        _all:"True",
        _page:"",
        _psize:""
      },
      handler:(resp) =>{
        this.bisogni = resp["_msg"]
        this.idBisognoEsterno= JSON.parse(this.route.snapshot.paramMap.get("bisogno"))
        if (this.idBisognoEsterno!=null){
          this.bisognoSegnalato.setValue(true)
        }
      },
      error: () => {
        this.utilities.alertError({handler:handler})
      }
    })

  }

  public submit(){
    if (this.ServizioCollettivitaForm.value.bisognoSegnalato && this.ServizioCollettivitaForm.value.bisogno==""){
      this.errore="Inserisci il bisogno che hai soddisfatto"
      return;
    }
    if (this.imgSend == null){
      this.errore="Inserisci un allegato"
      return 
    }
    let data = {
      "msg": this.ServizioCollettivitaForm.value.description,
      "date": this.ServizioCollettivitaForm.value.data,
      "bisognoSegnalato": this.ServizioCollettivitaForm.value.bisognoSegnalato,
      "idBisogno" : this.ServizioCollettivitaForm.value.bisogno,
      "idEnte": this.ServizioCollettivitaForm.value.ets,
      "foto" : this.imgSend
    }
    let handler= () => {
      this.navCtrl.navigateForward("/home");
    }

    this.request.post({
      path:"/services/community",
      data: data,
      handler: () => {
        this.utilities.simplyAlert({
          header:"Operazione effettuata",
          message: "Grazie per il tuo contributo!",
          operation:handler
        })
      },
      error : ()=>{
        this.utilities.alertError({
          handler:handler
        })
      }
    })
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
