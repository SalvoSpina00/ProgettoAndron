import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-ordini',
  templateUrl: './ordini.page.html',
  styleUrls: ['./ordini.page.scss'],
})

export class OrdiniPage {
  data: any[]=[];
  page: number;
  psize:number;


  constructor(private router: Router, private request: RequestService, private utilities: UtilitiesService) {
    this.page = 0
    this.psize = 5

    this.getOrdini()
  }

  loadmore(event) {
    this.page++
    this.getOrdini(()=>{event.target.complete()})
  }

  getOrdini(add=()=>{}){ 
    this.request.get({
      path:"/orders/mine",
      httpParam:{
        _page:this.page,
        _psize:this.psize,
      },
      handler:(results) =>{
        for (const t of results["_msg"]) {
          this.data.push(t);
        };
        add()
      },
      error: () =>{
        this.utilities.alertError({})
      }
    })
  }

  conferma(item:any,tipo:string){
    this.router.navigate(["/feedback", { "item": JSON.stringify(item), "tipo" : tipo}]);
  }

  segnala(item:any,tipo:string){
    if(item.segnalato){
      this.utilities.simplyAlert({ 
        header:"Attenzione!",
        message:"Hai già inviato una segnalazione per questo prodotto! Verrai contattato presto da qualcuno del nostro team."
      })
    }
    else{
      this.router.navigate(["/segnalazione", { "item": JSON.stringify(item), "tipo": tipo }]);
    }
  }



  popover(type){
    let msg = type == 0 ?
    "In attesa che l'azienda visualizzi l'ordine da te inviato" :
    "Il tuo ordine è stato evaso, lo riceverai al più presto!"
    this.utilities.createPopover(msg)
  }


}
