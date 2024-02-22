import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-service-management',
  templateUrl: './service-management.page.html',
  styleUrls: ['./service-management.page.scss'],
})
export class ServiceManagementPage implements OnInit {

  segnalazioniServizi: any

  constructor(private request : RequestService, private utility: UtilityService) { }

  ngOnInit() {
    this.getSegnalazioniServizi()
  }

  getSegnalazioniServizi(){
    this.request.get({
      path:"report/services",
      handler:(result)=>{
        this.segnalazioniServizi=result;
        console.log(this.segnalazioniServizi)
      },
      error:()=>{
        this.utility.alertError({})
      }
    })
  }

  rimborsoUtente(s){
    let idRichiedente = ""
    s.segnalazioni.forEach(element => {
      if (element.esponente==false){
        idRichiedente=element.id
      }
    });
    let data = {
      operazione:"rimborso",
      idRichiesta : s.idRichiesta,
      idRichiedente : idRichiedente
    }
    this.utility.confirmAlert({
      handlerYes:()=>{
        this.request.put({
          path:"report/services",
          data:data,
          handler:()=>{
            this.utility.simplyAlert({
              operation:()=>{
                this.getSegnalazioniServizi()
              },
              header:"Operazione Effettuata",
              message:"Il richiedente è stato rimborsato."
            })
          },
          error:()=>{
            this.utility.alertError({})
          }
        })
      },
      header:"Attenzione!",
      message:"Vuoi rimborsare il richiedente del servizio? In questo modo il servizio verrà considerato concluso."
    })
  }

  pagaEsponente(s){
    let data = {
      operazione: "concludi",
      idRichiesta : s.idRichiesta,
      idEsponente : s.idEsponente
    }
    this.utility.confirmAlert({
      handlerYes:()=>{
        this.request.put({
          path:"report/services",
          data:data,
          handler:()=>{
            this.utility.simplyAlert({
              operation:()=>{
                this.getSegnalazioniServizi()
              },
              header:"Operazione Effettuata",
              message:"Il servizio è stato gestito."
            })
          },
          error:()=>{
            this.utility.alertError({})
          }
        })
      },
      header:"Attenzione!",
      message:"Vuoi pagare l'esponente del servizio? In questo modo il servizio verrà considerato concluso."
    })
  }
}
