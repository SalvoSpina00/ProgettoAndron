import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RequestService } from 'src/app/services/request.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { PluginService } from 'src/app/services/plugin.service';

import { FormBuilder,Validators } from '@angular/forms'
@Component({
  selector: 'app-nuovo-prodotto',
  templateUrl: './nuovo-prodotto.page.html',
  styleUrls: ['./nuovo-prodotto.page.scss'],
})
export class NuovoProdottoPage {

  foto: any = null;
  errore: string = "";
  imgSrc: any;

  //#region Getter
  get nome(){
    return this.newProductForm.get("nome")
  }

  get marca(){
    return this.newProductForm.get("marca")
  }

  get descrizione(){
    return this.newProductForm.get("descrizione")
  }

  get prezzo(){
    return this.newProductForm.get("prezzo")
  }

  get quantita(){
    return this.newProductForm.get("quantita")
  }
  get categoria(){
    return this.newProductForm.get("categoria")
  }
  //#endregion
  
  defaultMessages={
    required:"Questo campo è obbligatorio",
    maxlength: (max) =>{
      return `Massimo ${ max } caratteri`
    },
    minlength: (min) =>{
      return `Minimo ${ min } caratteri`
    },
    max: (max) =>{
      return `Massimo ${ max }`
    },
    min: (min) =>{
      return `Minimo ${ min }`
    }
  }

  varLength={
    nome :            { min: 5, max: 50},
    marca :           { min: 5, max: 50},
    descrizione :     { min: 5, max: 500},
    prezzo :          { min: 1, max: 300},
    quantita :        { min: 1, max: 99},
    categoria :       { min: 5, max: 50},
  }
 
  public errorMessages = {
    nome: [
      { type: "required",  message: this.defaultMessages.required},
      { type: "maxlength", message: this.defaultMessages.maxlength(this.varLength.nome.max) },
      { type: "minlength", message: this.defaultMessages.minlength(this.varLength.nome.min) },
    ],
    marca: [
      { type: "required",  message: this.defaultMessages.required},
      { type: "maxlength", message: this.defaultMessages.maxlength(this.varLength.marca.max) },
      { type: "minlength", message: this.defaultMessages.minlength(this.varLength.marca.min) },
    ],
    descrizione: [
      { type: "required",  message: this.defaultMessages.required},
      { type: "maxlength", message: this.defaultMessages.maxlength(this.varLength.descrizione.max) },
      { type: "minlength", message: this.defaultMessages.minlength(this.varLength.descrizione.min) },
    ],
    quantita: [
      { type: "required",  message: this.defaultMessages.required},
      { type: "max", message: this.defaultMessages.max(this.varLength.quantita.max) },
      { type: "min", message: this.defaultMessages.min(this.varLength.quantita.min) },
      { type: "pattern", message: "Solo numeri interi"},
    ],
    prezzo: [
      { type: "required",  message: this.defaultMessages.required},
      { type: "max", message: this.defaultMessages.max(this.varLength.prezzo.max) },
      { type: "min", message: this.defaultMessages.min(this.varLength.prezzo.min) },
      { type: "pattern", message: "Solo numeri interi"},
    ],
    categoria: [
      { type: "required",  message: this.defaultMessages.required},
      { type: "maxlength", message: this.defaultMessages.maxlength(this.varLength.categoria.max) },
      { type: "minlength", message: this.defaultMessages.minlength(this.varLength.categoria.min) },
    ],
  }

  newProductForm = this.formBuilder.group({
    nome:     ['', [
        Validators.required,
        Validators.maxLength(this.varLength.nome.max),
        Validators.minLength(this.varLength.nome.min),
        this.utilities.validatorNotEmpty // required
      ]
    ],
    marca:     ['', [
        Validators.required,
        Validators.maxLength(this.varLength.marca.max),
        Validators.minLength(this.varLength.marca.min),
        this.utilities.validatorNotEmpty // required
      ]
    ],
    descrizione:     ['', [
        Validators.required,
        Validators.maxLength(this.varLength.descrizione.max),
        Validators.minLength(this.varLength.descrizione.min),
        this.utilities.validatorNotEmpty // required
      ]
    ],
    categoria:     ['', [
      Validators.required,
      Validators.maxLength(this.varLength.categoria.max),
      Validators.minLength(this.varLength.categoria.min),
      this.utilities.validatorNotEmpty // required
    ]
    ],
    prezzo:     ['', [
        Validators.required,
        Validators.max(this.varLength.prezzo.max),
        Validators.min(this.varLength.prezzo.min),
        Validators.pattern("^[0-9]*$"),
      ]
    ],
    quantita:     ['', [
        Validators.required,
        Validators.max(this.varLength.quantita.max),
        Validators.min(this.varLength.quantita.min),
        Validators.pattern("^[0-9]*$"),
      ]
    ] 
  })
  
  constructor(private navCtrl: NavController, private request: RequestService, private utilities: UtilitiesService, private plugin : PluginService, private formBuilder: FormBuilder) { 
      this.imgSrc= this.utilities.img
  }

  submit(){

    if (this.foto == null){
      this.errore = "Inserisci una foto del prodotto"
      return
    }

    let data= {
      categoria: this.categoria.value,
      descrizione: this.descrizione.value,
      foto: this.foto,
      marca: this.marca.value,
      nome: this.nome.value,
      prezzo: this.prezzo.value,
      quantita: this.quantita.value
    }

    this.request.post({
      path:"/products/mine",
      data:data,
      handler: () =>{
        this.utilities.simplyAlert({
          operation:()=>{this.navCtrl.navigateForward("/prodotti")}, 
          header:"Operazione effettuata", 
          message:"Prodotto inserito correttamente, una volta che verrà accettato gli altri utenti potranno acquistarlo."
        })
      },
      error: () =>{
        this.utilities.alertError({
          handler:()=>{this.navCtrl.navigateForward("/prodotti")}
        })
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
