import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RequestService } from 'src/app/services/request.service';
import { UtilitiesService } from 'src/app/services/utilities.service';


@Component({
  selector: 'app-abbonamenti',
  templateUrl: './abbonamenti.page.html',
  styleUrls: ['./abbonamenti.page.scss'],
})
export class AbbonamentiPage  {

  subs: any = [];
  
  constructor(public navCtrl: NavController, private request:RequestService, private utilities: UtilitiesService) {
    this.initializeItems();
  }



  initializeItems() {
    this.request.get({
      path:"/subs/mine",
      handler:(result)=>{
        result["_msg"].forEach(element => {
          element["img"]= element["img"] != null ? 'data:image/jpeg;base64,'+element["img"] : this.utilities.img
        });
        this.subs = result["_msg"];
      },
      error:()=>{
        this.utilities.alertError({})
      }
    })
  }

  openNewSubs(){
    this.navCtrl.navigateForward("/nuovo-abbonamento");
  }



  delete(idSubs:number){
    this.utilities.confirmAlert({
      header:"Attenzione",
      message:"Vuoi davvero eliminare questo abbonamento?",
      handlerYes:()=>{
        this.request.delete({
          path:"/subs/mine/"+idSubs,
          handler:(res) =>{
            this.utilities.simplyAlert({
              operation:()=>{this.initializeItems()},
              header:"Operazione effettuata", 
              message:"Abbonamento eliminato correttamente."
            })
          },
          error:()=>{
            this.utilities.alertError({})
          }
        })
      }
    })
    
  }


popover(type){
  let msg = type == 0 ?
  "L'abbonamento da te inserito è in stato di attesa, verrà valutato se considerarlo valido. Controlla nei prossimi giorni" :
  "L'abbonamento è attualmente online, gli utenti potranno ora acquistarlo usando gli Andron! Controlla se hai già degli ordini!"
  this.utilities.createPopover(msg)
}
}
