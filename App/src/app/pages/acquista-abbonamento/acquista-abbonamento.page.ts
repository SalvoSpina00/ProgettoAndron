import { Component } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-acquista-abbonamento',
  templateUrl: './acquista-abbonamento.page.html',
  styleUrls: ['./acquista-abbonamento.page.scss'],
})
export class AcquistaAbbonamentoPage {

  abbonamenti = null;
  idAbbonamento: number;
  
  page: number = 0;
  psize: number = 5;
  filtro: boolean = false
  termine: string = null;
  durataAbbonamento: number
  
  constructor(private route: ActivatedRoute, private router: Router, private request : RequestService, private utilities: UtilitiesService) {
      this.idAbbonamento = JSON.parse(this.route.snapshot.paramMap.get("id"))
      this.initializeItems();
  }




initializeItems() {
  this.request.get({
    path:"/subs",

    httpParam:{
      "_page":this.page,
      "_psize":this.psize,
      "filtro":this.filtro,
      "termine":this.termine
    },

    handler:(response)=>{
      this.abbonamenti = response["_msg"];
      console.log(this.abbonamenti)  
    },

    error: ()=>{
      this.utilities.alertError({
        handler:()=>{this.router.navigate(["/home"])},
        header:"Attenzione!", 
        message:"Si è verificato un errore, la pagina attualmente non è disponibile, riporva più tardi."
      })
    }
    
  })
}


rimuoviFiltri() {
  this.page = 0
  this.filtro = false;
  this.termine = '';
  this.initializeItems()
}

filter(event) {
  let val = event.target.value;
  if (val.trim() != ''){
    this.page = 0
    this.filtro = true;
    this.termine = val;

  }
  else{
    this.termine = ''
  }
  this.initializeItems()
}

getDurataAbbonamento(event) {
  this.durataAbbonamento = event.detail.value;
}

acquista(abbonamento : any ){
  this.utilities.confirmAlert({
    handlerYes:() => { 
      this.checkout(abbonamento,this.durataAbbonamento);
    },
    header:"Attenzione",
    message:"Vuoi proseguire con l'acquisto?"
  })
}

async checkout(abbonamento, durataAbbonamento) {
  let handler = () =>{
    this.router.navigate(["/home"]);
  }

this.request.get({
    path:"/budget",
    handler:(response) =>{

      let saldo = response["_msg"].andron;
      if (saldo < abbonamento.prezzo) {
        this.utilities.simplyAlert({
          header:"Attenzione",
          message:"Saldo insufficiente per effettuare l'operazione!"
        })
      }

      else {

        
        this.utilities.confirmAlert({
          header:"Attenzione",
          message:"Una volta effettuato l'acquisto saranno rimossi tot Andron",
          

          handlerYes:()=>{
            
            this.request.post({
              path:"/subs/"+abbonamento.id,
            
              data:{
                nome : abbonamento.nome,
                impresa : abbonamento.impresa,
                prezzo : abbonamento.prezzo,
                durata: durataAbbonamento
              },
              
              handler:()=>{
                this.utilities.simplyAlert({
                  header:"Operazione effettuata!!",
                  message:"Abbonamento acquistato."
                })
              },

              error:()=>{
                this.utilities.alertError({handler:handler})
              }
            })
          }
        })
      }
    }
  })
}
 
}
