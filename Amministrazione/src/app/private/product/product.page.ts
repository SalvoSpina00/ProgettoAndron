import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  prodotti:any;

  constructor(private request : RequestService, private utility: UtilityService) { }

  ngOnInit() {
    this.getProducts()
  }

  getProducts(){
    this.request.get({
      path:"approve/products",
      handler:(response)=>{
        response= response ?? []
        this.prodotti = response 
      },
      error:()=>{
        this.utility.alertError({})
      }
    })
  }

  acceptProduct(id){
    this.utility.confirmAlert({
      handlerYes:()=>{
        this.request.put({
          path:"approve/products",
          httpParam:{"id" : id},
          handler:(result)=>{
            this.utility.simplyAlert({
              operation:()=>{
                this.getProducts()
              },
              header:"Operazione Effettuata",
              message:"Prodotto attivato correttamente"
            
            })
          },
          error:(error)=>{
            this.utility.alertError({})
          }
        })
      },
      header:"Attenzione",
      message:"Vuoi confermare questo prodotto?"
    })
  }

  refuseProduct(id){
    this.utility.confirmAlert({
      handlerYes:()=>{
        this.request.delete({
          path:"approve/products",
          httpParam:{"id" : id},

          handler:(result)=>{
            this.utility.simplyAlert({
              operation:()=>{
                this.getProducts()
              },
              header:"Operazione Effettuata",
              message:"Prodotto rifiutato"
            })
          },

          error:(error)=>{
            this.utility.alertError({})
          }
        })
      },
      header:"Attenzione",
      message:"Vuoi rifiutare questo prodotto?"
    })
  }
}
