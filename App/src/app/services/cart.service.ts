import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  public cart : Map< number , {id:number, quantity : number, cost:number, name: string}> = new Map()
  
  constructor() {
  }

  addProduct(product){
    console.log(product)
    if (this.cart.has(product.id)){
      let value = this.cart.get(product.id)
      value.quantity++
    }
    else{
      this.cart.set(product.id, {id:product.id ,quantity:1, cost: product.andron, name:product.nome})
    }
  }

  removeProduct(product){
    if (this.cart.has(product.id)){
      let value = this.cart.get(product.id)
      value.quantity--
      if (value.quantity==0){
        this.cart.delete(product.id)
      }
    }
  }

  deleteProduct(id){
    if (this.cart.has(id)) this.cart.delete(id);
  }

  getTotal(): number{
    let total= 0
    for (let entry of this.cart.values()){
      total+=entry.cost*entry.quantity
    }
    return total
  }

  getTotalElements() : number{
    let total= 0
    for (let entry of this.cart.values()){
      total+=entry.quantity
    }
    return total
  }

  getCartElements(): number[]{
    return Array.from(this.cart.keys())
  }

}