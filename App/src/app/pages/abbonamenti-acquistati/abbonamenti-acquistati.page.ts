import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RequestService } from 'src/app/services/request.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-abbonamenti-acquistati',
  templateUrl: './abbonamenti-acquistati.page.html',
  styleUrls: ['./abbonamenti-acquistati.page.scss'],
})
export class AbbonamentiAcquistatiPage  {


  data: any = [];
  page: number;
  psize:number;

  constructor(public navCtrl: NavController, private request:RequestService, private utilities: UtilitiesService) {
    this.page = 0
    this.psize = 5

    this.getOrdiniAbbonamenti();
  }

  getOrdiniAbbonamenti(add=()=>{}) {
    this.request.get({
      path:"/ordersubs",
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
}
