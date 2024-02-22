import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.page.html',
  styleUrls: ['./order-management.page.scss'],
})
export class OrderManagementPage implements OnInit {

  segnalazioniOrdini: any;

  constructor(private request: RequestService, private utility:UtilityService) { }

  ngOnInit() {
    this.getSegnalazioniOrdini() 
  }

  getSegnalazioniOrdini(){
    this.request.get({
      path:"report/orders", 
      handler:(result)=>{
        this.segnalazioniOrdini=result;
        console.log(this.segnalazioniOrdini)
      },
      error:()=>{
        this.utility.alertError({})
      }
    })  
  }

  concludiOrdine(segnalazione){
    console.log(segnalazione)
    let data={
      "operazione": "concludi",
      "idOrdine" :segnalazione.idOrdine,
      "idSegnalazione": segnalazione.id
    }
    this.utility.confirmAlert({
      handlerYes:()=>{
        this.request.put({
          path:"report/orders",
          data:data,
          
          handler:(result)=>{
            this.utility.simplyAlert({
              operation:()=>{
                this.getSegnalazioniOrdini()
              },
              header:"Operazione effettuata",
              message:"La segnalazione è stata gestita, l'ordine verrà considerato concluso."
            })
          },
          error:(error)=>{
            this.utility.alertError({})
          }
        })
      },
      header:"Attenzione!",
      message:"Vuoi concludere l'ordine? In questo modo l'utente non verrà rimborsato."
    })
  }

  rimborsoUtente(segnalazione){
    console.log(segnalazione)
    let data={
      "operazione": "rimborso",
      "idOrdine" :segnalazione.idOrdine,
      "idSegnalazione": segnalazione.id,
      "idImpresa" : segnalazione.idImpresa,
      "idSegnalatore": segnalazione.da,
      "idTransazione": segnalazione.idTransazione
    }
    this.utility.confirmAlert({
      handlerYes:()=>{
        this.request.put({
          path:"report/orders",
          data:data,
          
          handler:(result)=>{
            this.utility.simplyAlert({
              operation:()=>{
                this.getSegnalazioniOrdini()
              },
              header:"Operazione effettuata",
              message:"L'utente è stato rimborsato."
            })
          },
          error:(error)=>{
            this.utility.alertError({})
          }
        })
      },
      header:"Attenzione!",
      message:"Vuoi rimborsare l'utente? Verranno rimossi gli Andron dall'impresa che ha venduto il prodotto."
    })
  }
}
