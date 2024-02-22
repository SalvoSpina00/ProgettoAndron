import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-richiedi-servizi',
  templateUrl: './richiedi-servizi.page.html',
  styleUrls: ['./richiedi-servizi.page.scss'],
})
export class RichiediServiziPage{
  
  servizi: any[]=[];
  psize: number = 5;
  page: number = 0;
  filtro: boolean = false
  termine: string = "None";

  constructor( private router: Router, private request : RequestService, private utilities: UtilitiesService) {
    this.getServizi()  
  }

  feedback(id:string,tipo:string,nome:string){
    this.router.navigate(["/infofeedback", { "id": id, "tipo": tipo, "nome" : nome }]);
  }

  getServizi(add=()=>{}) {
    this.request.get({
      path:"/services",
      httpParam:{
        _page: this.page,
        _psize: this.psize,
        filtro: this.filtro,
        termine:this.termine
      },
      handler:(results)=>{
        for (const t of results["_msg"]) {
          this.servizi.push(t);
        };
        add()
      },
      error:()=>{
        this.utilities.alertError({})
      }
    })
  }

  loadmore(event){
    this.page++
    this.getServizi(()=>{event.target.complete()})
  }

  rimuoviFiltri(){
    this.page=0
    this.filtro=false;
    this.termine='';
    this.getServizi()
  }

  filter(event){
    let val=event.target.value;
    if (val.trim() != '') {
      this.page=0
      this.filtro=true;
      this.termine=val;
      
    }
    else{
      this.termine=''
    }
    this.getServizi()
  }

  clickItem(id:number){
      this.router.navigate(["/richiesta", { "id": id }])
  }

}
