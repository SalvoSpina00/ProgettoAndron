import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-richieste-miei-servizi',
  templateUrl: './richieste-miei-servizi.page.html',
  styleUrls: ['./richieste-miei-servizi.page.scss'],
})
export class RichiesteMieiServiziPage {


  myRichiesteTODO: any
  msg: string;
  
  constructor(private router : Router, private request : RequestService, private utilities: UtilitiesService) { }

  ionViewWillEnter() {
    this.searchmyRichiesteTODO();
  }
  
  searchmyRichiesteTODO() {

    this.request.get({
      path:"/services/mine/requests",

      handler:(results)=>{
        this.myRichiesteTODO = results["_msg"];
      },
      error:()=>{
        this.utilities.alertError({})
      }
    })
    
  }

  setStato(id:number ,stato:string){
    console.log(stato)
    if (stato == "rifiutato") {
      this.msg = "Vuoi rifiutare questo servizio?"
    }
    if (stato == "accettato") {
      this.msg = "Vuoi accettare questo servizio?"
    }
    if (stato == "eseguito") {
      this.msg = "Hai davvero eseguito questo servizio?"
    }
    if (stato == "concluso"){
      this.msg ="Confermi di aver ricevuto la transazione?"
    }
    
    this.utilities.confirmAlert({
      
      handlerYes:()=>{
        this.request.put({
          path:"/requests/mine/"+id,
          data:{
            _stato:stato
          },
          handler:(results)=>{
            this.utilities.simplyAlert({
              operation:()=>{this.searchmyRichiesteTODO()},
              header:"Operazione Effettuata",
              message: "L'operazione e' stata eseguita con successo"
            })
          },
          error: (error)=>{
            this.utilities.alertError({})
          }
        })
        
      },
      header:"Attenzione",
      message:this.msg

    })
  }

  segnala(item: any, tipo: string) {

    if (item.sagnalazioneEsponente) {
      this.utilities.simplyAlert({
        header:"Attenzione", 
        message:"Hai gia' inviato una segnalazione per questo prodotto! Verrai contattato presto da qualcuno del nostro team."
      })
    }
    else {
      this.router.navigate(["/segnalazione", { "item": JSON.stringify(item), "tipo": tipo }]);
    }
    
  }

  elimina(id:number){
    this.utilities.confirmAlert({
      header:"Attenzione",
      message:"Vuoi davvero eliminare questa richiesta? Non sarà possibile annullare questa operazione.",
      handlerYes:()=>{
        
        this.request.delete({
          path:"/requests/mine/"+id,
          handler:()=>{
            this.utilities.simplyAlert({
              operation:()=>{this.searchmyRichiesteTODO()},
              header:"Operazione effettuata",
              message:"Richiesta eliminata."
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
