import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage {

  transactions: any[] = []

  budget: number ;
  today: string;

  page: number = 0;
  psize: number = 3;

  constructor(private router: Router, private request: RequestService, private utilities: UtilitiesService){
      
    this.getSaldo()
    this.getTransazioni()

  }
  

  clickItem(index){
    this.router.navigate(["/descrizione-transazione",{"transaction": JSON.stringify(this.transactions[index].id)}]);
  }

  getSaldo(){
    this.request.get({
      path:"/budget",
      handler:(response) =>{
        this.budget=response["_msg"].andron;
        this.today = new Date().toLocaleDateString()
      },
      error:()=>{
        this.utilities.alertError({})
      }
    })
  }

  getTransazioni(add = ()=>{} ){
    this.request.get({
      path:"/transaction",
      
      httpParam:{
        "_page":this.page,
        "_psize":this.psize
      },
      handler:(results) =>{
        results["_msg"].forEach(element => {
          this.transactions.push(element)
        });
        add()
      },
      error:()=>{
        this.utilities.alertError({})
      }
    })
  }

  loadmore(event){
    this.page++
    this.getTransazioni(()=>{event.target.complete()})
  }
  
}
