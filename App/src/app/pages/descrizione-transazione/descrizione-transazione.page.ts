import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';
import { UtilitiesService } from 'src/app/services/utilities.service';


@Component({
  selector: 'app-descrizione-transazione',
  templateUrl: './descrizione-transazione.page.html',
  styleUrls: ['./descrizione-transazione.page.scss'],
})
export class DescrizioneTransazionePage{

  data: object;

  constructor(private route: ActivatedRoute, private router : Router, private request : RequestService, private utilities : UtilitiesService) {
    
    this.request.get({
      path:"/transaction/"+JSON.parse(this.route.snapshot.paramMap.get("transaction")),
      
      handler:(results) =>{
        this.data= results["_msg"];
      },
      
      error: () =>{
        this.utilities.alertError({
          handler:()=>{this.router.navigate(["/home"])}
        })
      }
    })
  }
  
}
