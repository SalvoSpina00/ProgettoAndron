import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-richieste-mie',
  templateUrl: './richieste-mie.page.html',
  styleUrls: ['./richieste-mie.page.scss'],
})
export class RichiesteMiePage {

  myRichieste: any
  utenza:string;
  msg: string;

  constructor(private router : Router, private request: RequestService, private utilities: UtilitiesService) {}

  ionViewWillEnter() {
    this.searchmyRichieste()
  }

  searchmyRichieste() {
    this.request.get({
      path:"/requests/mine",
      handler:(results)=>{
        this.myRichieste = results["_msg"];
        console.log(this.myRichieste)
      },
      error:()=>{
        this.utilities.alertError({})
      }
    })

  }

  setStato(id:number ,stato:string){

    if (stato == "rifiutato") {
      this.msg = "Vuoi rifiutare questo servizio?"
    }
    if (stato == "accettato") {
      this.msg = "Vuoi accettare questo servizio?"
    }
    if (stato == "eseguito") {
      this.msg = "Hai davvero eseguito questo servizio?"
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
              operation:()=>{this.searchmyRichieste()},
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
    if (item.segnalazioneRichiedente) {
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
              operation:()=>{this.searchmyRichieste()},
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

  conferma(item: any, tipo: string) {
    this.router.navigate(["/feedback", { "item": JSON.stringify(item), "tipo": tipo }]);
  }


  popover(type){
    let msg = type == -1 ?
    "L'utente non ha accettato la tua richiesta. Ora puoi eliminare la richiesta." : type == 0 ?
    "La tua richiesta dev'essere ancora valutata dall'utente" :
    "L'utente ha dichiarato di aver effettuato il serivizio da te richiesto."
    
    this.utilities.createPopover(msg)
  }
}
