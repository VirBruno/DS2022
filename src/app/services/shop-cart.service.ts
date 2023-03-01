import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ShopCart } from '../interfaces/shopcart.interface';
import { Vuelo } from '../interfaces/vuelo.interface';

@Injectable({
  providedIn: 'root'
})
export class ShopCartService {

  private enableItemId = new BehaviorSubject<number>(0)
  private shoppingCart: BehaviorSubject<any>
  private shopCart$: Observable<ShopCart>
  private shopCart: ShopCart = {
    precioTotal : 0,
    vuelo_ida: null,
    vuelo_vuelta: null 
  }
  constructor() {
    this.shoppingCart = new BehaviorSubject(this.shopCart)
    this.shopCart$ = this.shoppingCart.asObservable()
  }
  
  get enableItemId$(){
    return this.enableItemId.asObservable()
  }

  addItem(item: Vuelo, flightType: string){

    if (flightType == 'ida') {
      if (this.shopCart.vuelo_ida) {
        return false
      }
      this.shopCart.vuelo_ida = item
      this.shopCart.precioTotal += item.precio
      this.shoppingCart.next(this.shopCart)
      return true
    }else if(flightType == 'vuelta'){
      if (this.shopCart.vuelo_vuelta) {
        return false
      }
      this.shopCart.vuelo_vuelta = item
      this.shopCart.precioTotal += item.precio
      this.shoppingCart.next(this.shopCart)
      return true
    }
    
    return false
  }

  enableItem(id: number){
    this.enableItemId.next(id)
  }

  getShopCart(){
    return this.shopCart$
  }
}
