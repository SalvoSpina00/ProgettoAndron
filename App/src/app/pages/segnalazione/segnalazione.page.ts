import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { RequestService } from 'src/app/services/request.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-segnalazione',
  templateUrl: './segnalazione.page.html',
  styleUrls: ['./segnalazione.page.scss'],
})
export class SegnalazionePage {

  tipo: string
  data: any
  msg: string;
  errore: string;


  constructor(private route: ActivatedRoute, private navCtrl : NavController, private request: RequestService, private utilities: UtilitiesService) {
    this.data = JSON.parse(this.route.snapshot.paramMap.get("item"));
    this.tipo = this.route.snapshot.paramMap.get("tipo");
    this.errore="";
  }


  segnala(){
    
    if (!this.msg || this.msg.trim() == '') {
      this.errore="Inserisci un messaggio di segnalazione"
      return 
    }   

    if (this.msg.length<5 || this.msg.length>500){
      this.errore = "Minimo 5 caratteri, massimo 500"
      return
    }

    this.utilities.confirmAlert({
      header:"Attenzione",
      message:"Vuoi inviare questa segnalazione?",

      handlerYes:()=>{
        let utente = this.data.esponente ?? this.data.richiedente
        utente = this.tipo == "ordine" ? this.data.nodoImpresa : utente

        this.request.post({
          path:"/report",
          data:{
            _msg: this.msg, 
            _tipo: this.tipo, 
            id: this.data.id, 
            utente: utente
          },
          handler:()=>{
            this.utilities.simplyAlert({
              operation:()=>{this.navCtrl.navigateForward("/home")},
              header:"Operazione effettuata",
              message:"Segnalazione inviata con successo."
            })
          },
          error:()=>{
            this.utilities.alertError({})
          }
        })
      }
    })

  }


}
