import { Component } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-certifica-servizi',
  templateUrl: './certifica-servizi.page.html',
  styleUrls: ['./certifica-servizi.page.scss'],
})
export class CertificaServiziPage {
  
  page:number = 0;
  psize:number = 3;
  servizi: any[] =[];

  constructor(private request: RequestService, private utilities: UtilitiesService) { 
    this.getServizi()
  }

  getServizi(add=()=>{}){
    this.request.get({
      path:"/services/community",

      httpParam:{
        "_page": this.page,
        "_psize": this.psize
      },

      handler:(result) => {

        result["_msg"].forEach(element => {
          element["img"]='data:image/jpeg;base64,'+element["img"]
          element["imgPrima"]='data:image/jpeg;base64,'+element["imgPrima"]
        });

        for (const t of result["_msg"]) {
          this.servizi.push(t);
        };
        add()
      },

      error:(err)  => {
        this.utilities.alertError({})
      }
    })
  }

  loadmore(event) {
    this.page++
    this.getServizi(event.target.complete())
  }

  accept(item){
    this.utilities.confirmAlert({

      header:"Attenzione!",
      message:"Vuoi certificare questo servizio offerto alla comunità?",
      handlerYes:()=>{
        this.request.put({
          path:"/services/community/"+item.id,

          handler:()=>{
            this.utilities.simplyAlert({
              header: "Operazione effettuata",
              message:"Servizio certificato correttamente!",
              operation:()=>{
                this.page=0;
                this.getServizi()
              },
            })
          },

          error:()=>{
            this.utilities.alertError({})
          }
        })
      }
    })

  }

  refuse(item){
    this.utilities.confirmAlert({

      header:"Attenzione!",
      message:      "Vuoi rifiutare di certificare questo servizio offerto alla comunità?",
      handlerYes:()=>{
        this.request.delete({
          path:"/services/community/"+item.id,

          handler:()=>{
            this.utilities.simplyAlert({
              header: "Attenzione",
              message:"Il servizio è stato rifiutato",
              operation:()=>{
                this.page=0;
                this.getServizi()
              },
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
