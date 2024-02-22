import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { RequestService } from 'src/app/services/request.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  utenza:string;
  today: string;

  budget: number ;
  ordini:any=[];
  img:any;

  constructor( private storage: Storage, private request: RequestService, private utilities: UtilitiesService) {
    this.img=this.utilities.img

    this.storage.get("utenza").then((a) => {
      this.utenza = a;
      if(this.utenza=="utente" || this.utenza=="ente"){
        this.getSaldo()
      }
      else{
        this.searchOrdini();
      }
    }) 
  }

  getSaldo(){
    this.request.get({
      path:"/budget",
      handler:(response) =>{
        this.budget=response["_msg"].andron;
        this.today = new Date().toLocaleDateString()
      },
      error:()=>{
        this.utilities.alertError({})
      }
    })

  }

  async evadiOrdine(id:number){
    this.utilities.confirmAlert({
      header:"Attenzione",
      message:"Vuoi davvero confermare l'evasione dell'ordine? Non sarà possibile annulare l'operazione",
      handlerYes:()=>{
        this.request.put({
          path:"/orders/"+id,
          handler:()=>{
            this.utilities.simplyAlert({
              operation:()=>{this.searchOrdini()},
              header:"Operazione effettuata", 
              message:"L'ordine è stato evaso, una volta che l'utente lo avrà ricevuto, invierà feedback relativo all'acquisto."
              })
          },
          error:()=>{
            this.utilities.alertError({})
          }
        })
      }
    })
  }


  searchOrdini(){
    
    this.request.get({
      path:"/orders",

      handler:(response)=>{
        this.ordini = response["_msg"];
      },

      error:()=>{
        this.utilities.alertError({})
      }
    })
  }

}
