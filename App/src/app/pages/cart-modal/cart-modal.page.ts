import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';
import { RequestService } from 'src/app/services/request.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage {


  constructor(private cartService: CartService, private modalCtrl: ModalController, private request : RequestService, private utilities: UtilitiesService,){

  }

  conferma(){
    if (this.cartService.getTotalElements() == 0) {
      this.utilities.simplyAlert({
        header:"Attenzione",
        message: "Il carrello è vuoto."
      })
      return
    }
    this.utilities.confirmAlert({
      handlerYes:() => { this.checkout()},
      header:"Attenzione",
      message:"Vuoi proseguire con l'ordine?"
    })
  }

  async checkout() {
    
      this.request.get({
        path:"/budget",
        handler:(response) =>{

          let saldo = response["_msg"].andron;
          if (saldo < this.cartService.getTotal()) {
            this.utilities.simplyAlert({
              header:"Attenzione",
              message:"Saldo insufficiente per effettuare l'operazione!"
            })
          }

          else {
            
            this.request.post({
              path:"/products",
              data: Array.from(this.cartService.cart.values()),
              handler:() =>{
                this.utilities.simplyAlert({
                  operation:()=>{
                    this.cartService.cart=new Map()
                    this.modalCtrl.dismiss();
                  },
                  header:"Grazie per il tuo ordine!",
                  message:"Speriamo che usufrirai ancora dei nostri servizi"
                })
                
              },

              error: (errore) =>{
                console.log(errore)
                if(errore.error.status==-1){
                  this.utilities.alertError({header:"Attenzione!",message:errore.error.messaggio})
                }else{
                  this.utilities.alertError({})
                }
              }

            })

          }
        },
        error:()=>{
          this.utilities.alertError({})
        }
      })
  }
  

}