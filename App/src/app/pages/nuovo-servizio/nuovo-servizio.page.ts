import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RequestService } from 'src/app/services/request.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-nuovo-servizio',
  templateUrl: './nuovo-servizio.page.html',
  styleUrls: ['./nuovo-servizio.page.scss'],
})
export class NuovoServizioPage{


  get nome(){
    return this.newServiceForm.get("nome")
  }

  get descrizione(){
    return this.newServiceForm.get("descrizione")
  }

  get ore(){
    return this.newServiceForm.get("ore")
  }

  get preavviso(){
    return this.newServiceForm.get("preavviso")
  }

  newServiceForm = this.formBuilder.group({
    nome: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(5), this.utilities.validatorNotEmpty]],
    descrizione: ['', [Validators.required, Validators.maxLength(500), Validators.minLength(5), this.utilities.validatorNotEmpty]],
    ore: ['', [Validators.required, Validators.max(5), Validators.min(1),Validators.pattern("^[0-9]+$")]],
    preavviso: ['', [Validators.required,Validators.max(14), Validators.min(1), Validators.pattern("^[0-9]+$"),]],
  })

  public errorMessages = {
    nome: [
      { type: "required", message: "Questo campo è obbligatorio" },
      { type: "maxlength", message: "Massimo 50 caratteri" },
      { type: "minlength", message: "Minimo 5 caratteri" }
    ],
    descrizione: [
      { type: "required", message: "Questo campo è obbligatorio" },
      { type: "maxlength", message: "Massimo 500 caratteri" },
      { type: "minlength", message: "Minimo 5 caratteri" }
    ],
    ore: [
      { type: "required", message: "Questo campo è obbligatorio" },
      { type: "max", message: "Massimo 5 ore" },
      { type: "min", message: "Minimo 1 ore" },
      { type: "pattern", message: "Solo numeri interi positivi"}
    ],
    preavviso: [
      { type: "pattern", message: "Solo numeri interi positivi"},
      { type: "required", message: "Questo campo è obbligatorio" },
      { type: "max", message: "Massimo 14 giorni" },
      { type: "min", message: "Minimo 1 giorni" },
    ],
  }

  constructor(private navCtrl: NavController, private request: RequestService, private utilities: UtilitiesService, private formBuilder: FormBuilder) {
  }

  test(){
    console.log(this.newServiceForm.valid)
  }

  submit(){
    let servizio = {
      "nome" :this.newServiceForm.value.nome,
      "descrizione" : this.newServiceForm.value.descrizione,
      "preavviso": this.newServiceForm.value.ore,
      "ore" : this.newServiceForm.value.preavviso,
    }
    
    this.request.post({
      path:"/services/mine",
      data:servizio,

      handler:(result)=>{
        this.utilities.simplyAlert({
          header:"Operazone effettuata",
          message: "Il servizio è stato inviato correttamente, una volta accettato gli altri utenti potranno richiederlo",
          operation: ()=>{
            this.navCtrl.navigateForward("/servizi");
          },
        })
      },

      error:()=>{
        this.utilities.alertError({
          handler:()=>{
            this.navCtrl.navigateForward("/servizi");
          }
        })
      }

    })
  
  }
}
