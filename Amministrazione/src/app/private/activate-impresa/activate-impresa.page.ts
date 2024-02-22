import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-activate-impresa',
  templateUrl: './activate-impresa.page.html',
  styleUrls: ['./activate-impresa.page.scss'],
})
export class ActivateImpresaPage implements OnInit {

  imprese:any;

  constructor(private request:RequestService, private utility: UtilityService) { }

  ngOnInit() {
    this.getImprese()
  }

  getImprese(){
    


    this.request.get({
      path: "account/impresa",

      handler:(result)=>{
        result= result ?? []
        result.forEach(element => {
          element["foto"] = 'data:image/jpeg;base64,'+ element["foto"]
        });
        this.imprese=result 
        console.log(this.imprese)
      },
      
      error:(error)=>{
        this.utility.alertError({})
      }
    })
  }

  activateImpresa(id){
    this.utility.confirmAlert({
      handlerYes:()=>{
        this.request.put({
          path:"account/impresa",
          httpParam:{ "id" : id},
          handler: (result)=>{
            this.utility.simplyAlert({
              operation:()=>{
                this.getImprese()
              },
              header:"Operazione Effettuata",
              message:"Account Utente attivato correttamente"
            })
          },
          error:(error)=>{
            this.utility.alertError({})
          }
        })
      },
      header:"Attenzione",
      message:"Vuoi attivare questo account?"
    })
  }

  refuseImpresa(id){
    this.utility.confirmAlert({
      handlerYes:()=>{
        this.request.delete({
          path:"account/impresa",
          httpParam:{ "id" : id },

          handler:(result)=>{
            this.utility.simplyAlert({
              operation:()=>{
                this.getImprese()
              },
              header:"Operazione Effettuata",
              message:"Account Utente attivato correttamente"
            
            })
          },

          error: (error)=>{
            this.utility.alertError({})
          }
        })
      },
      header:"Attenzione",
      message:"Vuoi rifiutarti di attivare questo account?"
    })
  }
}
