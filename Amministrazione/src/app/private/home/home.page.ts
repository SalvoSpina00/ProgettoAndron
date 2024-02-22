import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { UtilityService } from 'src/app/services/utility.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  andron :number
  percentuale: number

  constructor(private request:RequestService, private utility:UtilityService) { 
    this.getSettings()
  }

  ngOnInit() {
  }

  getSettings(){
    this.request.get({
      path:"settings",
      handler:(response)=>{
        response=response[0].Record
        this.andron = response["andronGeneration"]
        this.percentuale=response["rewardEts"]
      },
      error:()=>{
        this.utility.alertError({})
      }
    })
  }

  setSettings(tipo){
    let data={
      "options" : tipo,
      "andron" : this.andron,
      "percentuale" : this.percentuale
    }

    this.request.put({
      path:"settings",
      data:data,
      handler:()=>{
        this.utility.simplyAlert({
          header:"Operazione Effettuata",
          message:"Campo aggiornato correttamente."
        })
      },
      error:()=>{
        this.utility.alertError({})
      }
    })
  }

}
