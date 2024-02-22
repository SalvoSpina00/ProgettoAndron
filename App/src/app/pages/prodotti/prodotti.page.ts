import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RequestService } from 'src/app/services/request.service';
import { UtilitiesService } from 'src/app/services/utilities.service';


@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.page.html',
  styleUrls: ['./prodotti.page.scss'],
})
export class ProdottiPage {

  products: any = [];
  
  constructor(public navCtrl: NavController, private request:RequestService, private utilities: UtilitiesService) {
    this.initializeItems();
  }

  aggiungi(id:number) {
    this.utilities.alertController.create({
      header: "Aggiungi",
      message:"Inserire la quantità da aggiungere",
      inputs: [
        {
          name: 'quantita',
          type: "number",
          placeholder: 'Quantità'
        }],
      buttons: [
        {
          text: 'Annulla',
          role: 'cancel',
        },
        {
          text: 'Ok',
          handler: data => {
            data.quantita = data.quantita == "" ? 0 : data.quantita
            data.quantita=parseInt(data.quantita)

            if(data.quantita<=0){
              data.quantita=0
              return 
            }

            this.request.put({
              path:"/products/mine/"+id,
              data:{ quantita : data.quantita },
              handler:()=>{
                this.utilities.simplyAlert({
                  operation:()=>{this.initializeItems()},
                  header:"Operazione effettuata", 
                  message:"Quantità aggiunta."
                })
              },
              error:(error)=>{
                this.utilities.alertError({})
              }
            })
          }
        }]
    }).then(alert => alert.present());
  }


  initializeItems() {
    this.request.get({
      path:"/products/mine",
      handler:(result)=>{
        result["_msg"].forEach(element => {
          element["img"]= element["img"] != null ? 'data:image/jpeg;base64,'+element["img"] : this.utilities.img
        });
        this.products = result["_msg"];
      },
      error:()=>{
        this.utilities.alertError({})
      }
    })

  }

  delete(idProd:number){
    this.utilities.confirmAlert({
      header:"Attenzione",
      message:"Vuoi davvero eliminare questo prodotto?",
      handlerYes:()=>{
        this.request.delete({
          path:"/products/mine/"+idProd,
          handler:(res) =>{
            this.utilities.simplyAlert({
              operation:()=>{this.initializeItems()},
              header:"Operazione effettuata", 
              message:"Prodotto eliminato correttamente."
            })
          },
          error:()=>{
            this.utilities.alertError({})
          }
        })
      }
    })
    
  }

  openNewProduct(){
    this.navCtrl.navigateForward("/nuovo-prodotto");
  }

  popover(type){
    let msg = type == 0 ?
    "Il prodotto da te inserito è in stato di attesa, verrà valutato se considerarlo valido. Controlla nei prossimi giorni" :
    "Il prodotto è attualmente online, gli utenti potranno ora acquistarlo usando gli Andron! Controlla se hai già degli ordini!"
    this.utilities.createPopover(msg)
  }
}
