import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RequestService } from 'src/app/services/request.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

export interface Service {
  id: number;
  name: string;
  descrizione: string;
  price: number;
}
@Component({
  selector: 'app-servizi',
  templateUrl: './servizi.page.html',
  styleUrls: ['./servizi.page.scss'],
})
export class ServiziPage {

  upperPrice: number;
  lowerPrice: number;
  results: {}

  constructor(
    public navCtrl: NavController,
    public request : RequestService,
    public utilities : UtilitiesService,
  ) {
    this.upperPrice = 500;
    this.lowerPrice = 0;
    this.searchMieiServizi();
  }

  searchMieiServizi(){
    this.request.get({
      path:"/services/mine",
      handler:(results) =>{
        this.results=results["_msg"]
      },
      error: (error) => {
        this.utilities.alertError({})
      }
    })
  }

  delete(idService:number){
    this.utilities.confirmAlert({
      header: "Attenzione",
      message: "Vuoi davvero eliminare questo servizio?",
      handlerYes:()=>{
        this.request.delete({
          path:"/services/mine/"+idService,
          handler:()=>{
            this.utilities.simplyAlert({
              header:"Operazione effettuata",
              message: "Servizio eliminato correttamente",
              operation: () =>{
                this.searchMieiServizi()
              }
            })
          },
          error:()=>{
            this.utilities.alertError({})
          }
        })
      }
    })
  }

  openNewService(){
    this.navCtrl.navigateForward("/nuovo-servizio");
  }

  popover(type){
    let msg = type == 0 ?
    "Il servizio da te inserito attualmente è in stato di attesa, verrà valutato se considerarlo valido. Controlla nei prossimi giorni" :
    "Il servizio è attualmente online, chi necessiterà del servizio potrà contattarti!"
    this.utilities.createPopover(msg)
  }
}
