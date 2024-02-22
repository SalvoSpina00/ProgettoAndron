import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-bisogni',
  templateUrl: './bisogni.page.html',
  styleUrls: ['./bisogni.page.scss'],
})
export class BisogniPage {

  page:number = 0;
  psize:number = 3;
  bisogni: any[] = [];

  constructor( private router: Router, private request: RequestService, private utilities : UtilitiesService) {
    this.getBisogni()
  }

  getBisogni(add=()=>{}){
    this.request.get({
      path:"/needs",
      
      httpParam:{
        "_all" :  false,
        "_page" : this.page,
        "_psize" : this.psize
      },
    
      handler:(result) => {

        result["_msg"].forEach(element => {
          element["img"]='data:image/jpeg;base64,'+element["img"]
        });
        
        for (const t of result["_msg"]) {
          this.bisogni.push(t);
        };
        add()
      },
      
      error: ()=> {this.utilities.alertError({})}
    })
  }

  loadmore(event) {
    this.page++
    this.getBisogni(()=>{event.target.complete()})
  }

  clickItem(item){
    this.router.navigate(["/servizi-collettivita",{"bisogno": item.id }]);
  }

}
