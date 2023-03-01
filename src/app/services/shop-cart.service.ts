import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ShopCart } from '../interfaces/shopcart.interface';
import { Vuelo } from '../interfaces/vuelo.interface';

@Injectable({
  providedIn: 'root'
})
export class ShopCartService {

  shoppingCart: BehaviorSubject<any> 
  shopCart$: Observable<ShopCart> 
  shopCart: ShopCart  = {
    precioTotal : 0,
    vuelos: []
  }
  constructor() { 
    this.shoppingCart = new BehaviorSubject(this.shopCart)
    this.shopCart$ = this.shoppingCart.asObservable()
  }
  
  addItem(item: Vuelo){
    this.shopCart.vuelos.push(item)
    this.shopCart!.precioTotal += item.precio
    this.shoppingCart.next(this.shopCart)
  }

  getShopCart(){
    return this.shopCart$
  }
}
