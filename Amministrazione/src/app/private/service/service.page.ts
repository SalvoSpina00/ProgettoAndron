import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})
export class ServicePage implements OnInit {

  servizi : any; 

  constructor(private request : RequestService, private utility: UtilityService) { }

  ngOnInit() {
    this.getServices()
  }

  getServices(){
    this.request.get({
      path:"approve/services",
      handler:(response)=>{
        console.log(response)
        response= response ?? []
        this.servizi = response
      },
      error:()=>{
        this.utility.alertError({})
      }
    })
  }

  acceptService(id){
    this.utility.confirmAlert({
      handlerYes:()=>{
        this.request.put({
          path:"approve/services",
          httpParam: { "id" : id},
          
          handler:(result)=>{
            this.utility.simplyAlert({
              operation:()=>{
                this.getServices()
              },
              header:"Operazione Effettuata",
              message:"Servizio attivato correttamente"
            })
          },
          error:(error)=>{
            this.utility.alertError({})
          }
        })
      },
      header:"Attenzione",
      message:"Vuoi confermare questo servizio?"
    })
  }

  refuseService(id){
    this.utility.confirmAlert({
      handlerYes:()=>{
        this.request.delete({
          path:"approve/services",
          httpParam:{ "id" : id },
          handler:(result)=>{
            this.utility.simplyAlert({
              operation:()=>{
                this.getServices()
              },
              header:"Operazione Effettuata",
              message:"Servizio rifiutato"
            
            })
          },
          error:(error)=>{
            this.utility.alertError({})
          }
        })
      },
      header:"Attenzione",
      message:"Vuoi rifiutare questo servizio?"
    })
  }

}
