import { Component, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartModalPage } from '../cart-modal/cart-modal.page';
import { SearchFilterPage } from '../../pages/modal/search-filter/search-filter.page';
import { RequestService } from 'src/app/services/request.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-compra',
  templateUrl: './compra.page.html',
  styleUrls: ['./compra.page.scss']
})
export class CompraPage {

  [x: string]: any;
  
  prodotti: any[] = [];
  cartItemCount: number = 0;
  upperPrice: number = undefined;
  lowerPrice: number = undefined;

  page:number = 0;
  psize:number = 5;
  filtro:boolean = false;
  termine:string = null;


  
  @ViewChild('cart', { read: ElementRef })fab: ElementRef;
  constructor(public modalCtrl: ModalController, private cartService: CartService, private request: RequestService, private utilities : UtilitiesService, private router: Router) {
      this.cartItemCount = this.cartService.getTotalElements();
      this.initializeItems();
  }

  incrementCounter(){
    this.cartItemCount++;
  }

  initializeItems(add=()=>{}) {
    this.request.get({
      path:"/products",

      httpParam:{
        "_page":this.page,
        "_psize":this.psize,
        "filtro":this.filtro,
        "termine":this.termine,
        "min":this.min,
        "max":this.max
      },

      handler:(response)=>{
        console.log(response)
        for (const t of response["_msg"]) {
          this.prodotti.push(t);
        };
        add()
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

  loadmore(event) {
    this.page++
    this.initializeItems(()=>{event.target.complete()})
  }
  
  async openCart(){
    let modal = await this.modalCtrl.create({
      component: CartModalPage,
    });
    modal.onDidDismiss().then(()=>{
      this.cartItemCount = this.cartService.getTotalElements();
    })
    return await modal.present();
  }

  async searchFilter () {
    const modal = await this.modalCtrl.create({
      component: SearchFilterPage
    });
    modal.onDidDismiss().then((data)=>{
      this.upperPrice = data.data["upper"] ?? 300;
      this.lowerPrice = data.data["lower"] ?? 0;
      this.filtro=true;
      this.initializeItems()
    });
    return await modal.present();
  }

  rimuoviFiltri() {
    this.page = 0
    this.filtro = false;
    this.termine = '';
    this.lowerPrice=undefined;
    this.upperPrice=undefined;
    this.initializeItems()
  }

  filter(event) {
    this.page = 0
    this.filtro = true;
    this.termine = event.target.value.trim()
    this.initializeItems()
  }

  clickItem(product : any){
    this.router.navigate(["/descrizione-prodotto", {"product": JSON.stringify(product)}]);
  }

  feedback(id:string,tipo:string,nome:string){
    this.router.navigate(["/infofeedback", { "id": id, "tipo":tipo, "nome": nome }]);
  }


}
