import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-richiesta',
  templateUrl: './richiesta.page.html',
  styleUrls: ['./richiesta.page.scss'],
})
export class RichiestaPage{
  
  idServizio: number;
  servizio= null;

  msg: string;
  date: Date;
  ore: number;
  errore:string = "";

  constructor(private route: ActivatedRoute, private router:Router, private request : RequestService, private utilities : UtilitiesService) {
    this.idServizio = JSON.parse(this.route.snapshot.paramMap.get("id"));
    this.getServizio()
  }

  getServizio() {
    this.request.get({
      path:"/services/"+this.idServizio,
      handler:(results)=>{
        this.servizio = results["_msg"];
        console.log(this.servizio)
      },
      error:()=>{
        this.utilities.simplyAlert({
          operation:()=>{this.router.navigate(["/home"])},
          header:"Attenzione",
          message:"Si è verificato un errore nell'accesso alla pagina, riprova più tardi."
        })
      }
    })
  }

  feedback(id: string, tipo: string, nome: string) {
    this.router.navigate(["/infofeedback", { "id": id, "tipo": tipo, "nome": nome }]);
  }

  calculateDiff(dateSent){
    let currentDate = new Date();
    dateSent = new Date(dateSent);

    return Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) ) /(1000 * 60 * 60 * 24));
  }

  richiesta(){
    this.msg= this.msg ?? "";
    if(this.msg.trim()==="" || this.date == null){
      this.errore="Compila adeguatamente i campi"
      return
    }

    if(this.msg.length<5 || this.msg.length>500){
      this.errore="Minimo 5 caratteri, massimo 500"
      return
    }

    if (isNaN(this.ore) || this.ore<0 || this.ore>this.servizio.ore) {
      this.errore = "Il numero di ore massime dedicabili dev'essere un numero positivo (massimo "+this.servizio.ore +" ore)"
      return
    }
    if (-1*this.calculateDiff(this.date)<this.servizio.preavviso){
      this.errore = "Non puoi richiedere il servizio per la data selezionata (Giorni minimi di preavviso:"+this.servizio.preavviso+")" 
      return
    }
    let handler = () =>{
      this.router.navigate(["/home"]);
    }

    this.request.get({
      path:"/budget",
      error:()=>{
        this.utilities.alertError({})
      },
      handler:(response)=>{
        let saldo = response["_msg"].andron;

        if (saldo < this.servizio.andron*this.ore){
          this.utilities.simplyAlert({
            header:"Attenzione",
            message:"Saldo insufficiente."
          })
        }
        else{

          this.utilities.confirmAlert({
            header:"Attenzione",
            message:"Una volta effettuata la richiesta saranno rimossi preventivamente "+ this.ore *this.servizio.andron  +" Andron. Verranno restituiti in caso la richiesta non dovesse andare a buon fine.",
            
            handlerYes:()=>{
              this.request.post({
                path:"/services/"+this.servizio.id,
                data:{
                  _msg:this.msg,
                  _data:this.date,
                  _ore:this.ore
                },
                handler:()=>{
                  this.utilities.simplyAlert({
                    operation:handler,
                    header:"Operazione effettuata",
                    message:"La richiesta è stata inviata correttamente"
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
