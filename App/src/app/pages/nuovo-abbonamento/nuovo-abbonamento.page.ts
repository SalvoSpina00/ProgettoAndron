import { Component} from '@angular/core';
import { NavController } from '@ionic/angular';
import { RequestService } from 'src/app/services/request.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { AbstractControl, FormBuilder, ValidatorFn, Validators} from '@angular/forms'
import { PluginService } from 'src/app/services/plugin.service'

@Component({
  selector: 'app-nuovo-abbonamento',
  templateUrl: './nuovo-abbonamento.page.html',
  styleUrls: ['./nuovo-abbonamento.page.scss'],
})
export class NuovoAbbonamentoPage{

  foto: any = null;
  errore: string = "";
  imgSrc: any;
  
  //#region Getter
  get nomeAbbonamento(){
    return this.newAbbonamentoForm.get("nomeAbbonamento")
  }

  get descrizioneAbbonamento(){
    return this.newAbbonamentoForm.get("descrizioneAbbonamento")
  }

  get durataAbbonamento(){
    return this.newAbbonamentoForm.get("durataAbbonamento")
  }

  get prezzoAbbonamento(){
    return this.newAbbonamentoForm.get("prezzoAbbonamento")
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
    nomeAbbonamento :           { min: 5, max: 50},
    descrizioneAbbonamento :    { min: 5, max: 500},
    durataAbbonamento :            { min: 1, max: 30, allowedValues : [1,15,30]},
    prezzoAbbonamento:       { min: 1, max: 14},
  }


  public errorMessages = {
      nomeAbbonamento: [
        { type: "required", message: "Questo campo è obbligatorio" },
        { type: "maxlength", message: "Massimo 50 caratteri" },
        { type: "minlength", message: "Minimo 5 caratteri" }
      ],
      descrizioneAbbonamento: [
        { type: "required", message: "Questo campo è obbligatorio" },
        { type: "maxlength", message: "Massimo 500 caratteri" },
        { type: "minlength", message: "Minimo 5 caratteri" }
      ],
      durataAbbonamento: [
        { type: "required", message: "Questo campo è obbligatorio" },
        { type: "max", message: "Massimo 5 durata" },
        { type: "min", message: "Minimo 1 durata" },
        { type: "pattern", message: "Solo numeri interi positivi"}
      ],
      prezzoAbbonamento: [
        { type: "pattern", message: "Solo numeri interi positivi"},
        { type: "required", message: "Questo campo è obbligatorio" },
        { type: "max", message: "Massimo 14 giorni" },
        { type: "min", message: "Minimo 1 giorni" },
      ],
    }
  newAbbonamentoForm = this.formBuilder.group({
    nome: ['', [
      Validators.required,
      Validators.maxLength(50), 
      Validators.minLength(5), 
      this.utilities.validatorNotEmpty
      ]
    ],
    descrizione: ['', [
      Validators.required,
      Validators.maxLength(500),
      Validators.minLength(5),
      this.utilities.validatorNotEmpty
      ]
    ],
    durata: ['', [
      Validators.required, 
      Validators.max(30), 
      Validators.min(1),
      durataAbbonamentoValidator([1,15,30]),
      Validators.pattern("^[0-9]+$"),
      ]
    ],
    prezzo: ['', [
      Validators.required,
      Validators.max(14), 
      Validators.min(1), 
      Validators.pattern("^[0-9]+$"),
      ]
    ],
  })

  
  
  constructor(private navCtrl: NavController, private request: RequestService, private utilities: UtilitiesService,private plugin : PluginService, private formBuilder: FormBuilder) {
    this.imgSrc = this.utilities.img
  } 

 
  submit(){

    if (this.foto == null){
      this.errore = "Inserisci una foto"
      return
    }

    let abbonamento = {
      "nome" :this.newAbbonamentoForm.value.nome,
      "descrizione" : this.newAbbonamentoForm.value.descrizione,
      "prezzo": this.newAbbonamentoForm.value.prezzo,
      "durata" : this.newAbbonamentoForm.value.durata,
       "foto" : this.foto
    }
    
    this.request.post({
      path:"/subs/mine",
      data:abbonamento,
      handler:()=>{
        this.utilities.simplyAlert({
          operation: ()=>{
            this.navCtrl.navigateForward("/abbonamenti")},
          header:"Operazone effettuata",
          message: "L'abbonamento è stato inserito correttamente, una volta accettato gli altri utenti potranno richiederlo."  
        })
      },

      error:()=>{
        this.utilities.alertError({
          handler:()=>{
            this.navCtrl.navigateForward("/abbonamenti")}
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


export function durataAbbonamentoValidator(allowedValues: number[]): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (allowedValues.indexOf(value) === -1) {
      return { 'durataAbbonamento': { value: value, allowedValues: allowedValues } };
    }
    return null;
  };
}
