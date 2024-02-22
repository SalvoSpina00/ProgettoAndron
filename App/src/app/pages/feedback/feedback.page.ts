import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { RequestService } from 'src/app/services/request.service';
import { UtilitiesService } from 'src/app/services/utilities.service';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})

export class FeedbackPage {
  tipo:string 
  data:any
  msg:string;
  valutazione: number;
  errore:string;

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private request : RequestService, private utilities : UtilitiesService) { 
   
    this.data = JSON.parse(this.route.snapshot.paramMap.get("item"));
    this.tipo = this.route.snapshot.paramMap.get("tipo");
  }


  async servizioEseguito(id: number) {
    if (!(this.msg && this.valutazione)){
      this.errore="Compila tutti i campi"
      return
    }
    if (this.msg.trim() === '') {
      this.errore = "Compila adeguatamente i campi"
      return
    }
    if(this.msg.length<5 || this.msg.length>500){
      this.errore = "Minimo 5 caratteri, massimo 500 caratteri"
      return
    }
    if(this.valutazione<1 || this.valutazione>5){
      this.errore = "Minimo 1, massimo 5"
    }

    this.utilities.confirmAlert({
      header:      "Attenzione",
      message:     "Vuoi confermare questo servizio?",
      handlerYes : () => {
        this.request.post({
          path:"/requests/mine/"+id,
          data: {
            "_msg": this.msg,
            "_valutazione" : this.valutazione
          },
          handler:(results)=>{
              this.utilities.simplyAlert({
                operation:()=>{this.navCtrl.navigateForward("/home")},
                header:"Attenzione",
                message:"Operazione Effettuata"
              })
          },
          error:(error)=>{
            this.utilities.alertError({})
          }
        })
      }

    })
    
  }


  async confermaOrdine(dati:any){
    if (!(this.msg && this.valutazione)){
      this.errore="Compila tutti i campi"
      return
    }
    if (this.msg.trim() === '') {
      this.errore = "Compila adeguatamente i campi"
      return
    }
    if(this.msg.length<5 || this.msg.length>500){
      this.errore = "Minimo 5 caratteri, massimo 500 caratteri"
      return 
    }
    if(this.valutazione<1 || this.valutazione>5){
      this.errore = "Minimo 1, massimo 5"
    }

    this.utilities.confirmAlert({
      header:      "Attenzione",
      message:     "Vuoi confermare questo ordine?",
      handlerYes : () => {
        this.request.put({
          path:"/orders/mine/"+this.data.id,
          data: {
            "_a": this.data.nodoImpresa,
            "_msg": this.msg,
            "_valutazione" : this.valutazione
          },
          handler:(results)=>{
              this.utilities.simplyAlert({
                operation:()=>{this.navCtrl.navigateForward("/home")},
                header:"Attenzione",
                message:"Operazione Effettuata"
              })
          },
          error:(error)=>{
            this.utilities.alertError({})
          }
        })
      }

    })
  }



}
