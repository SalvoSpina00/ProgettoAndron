import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.page.html',
  styleUrls: ['./subscription.page.scss'],
})
export class SubscriptionPage implements OnInit {

  abbonamenti : any;

  constructor(private request : RequestService, private utility: UtilityService) { }

  ngOnInit() {
    this.getSubs()
  }

  getSubs(){
    this.request.get({
      path:"approve/subs",
      handler:(response)=>{
        response= response ?? []
        this.abbonamenti = response 
      },
      error:()=>{
        this.utility.alertError({})
      }
    })
  }

  acceptSubscription(id){
    this.utility.confirmAlert({
      handlerYes:()=>{
        this.request.put({
          path:"approve/subs",
          httpParam:{"id" : id},
          handler:(result)=>{
            this.utility.simplyAlert({
              operation:()=>{
                this.getSubs()
              },
              header:"Operazione Effettuata",
              message:"Prodotto attivato correttamente"
            
            })
          },
          error:(error)=>{
            this.utility.alertError({})
          }
        })
      },
      header:"Attenzione",
      message:"Vuoi confermare questo abbonamento?"
    })
  }

  refuseSubscription(id){
    this.utility.confirmAlert({
      handlerYes:()=>{
        this.request.delete({
          path:"approve/subs",
          httpParam:{"id" : id},

          handler:(result)=>{
            this.utility.simplyAlert({
              operation:()=>{
                this.getSubs()
              },
              header:"Operazione Effettuata",
              message:"Abbonamento rifiutato"
            })
          },

          error:(error)=>{
            this.utility.alertError({})
          }
        })
      },
      header:"Attenzione",
      message:"Vuoi rifiutare questo abbonamento?"
    })
  }



}
