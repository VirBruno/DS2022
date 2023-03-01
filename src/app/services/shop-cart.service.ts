import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ShopCart } from '../interfaces/shopcart.interface';
import { Vuelo } from '../interfaces/vuelo.interface';

@Injectable({
  providedIn: 'root'
})
export class ShopCartService {

  private enableItemId = new BehaviorSubject<number>(0)
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
  
  get enableItemId$(){
    return this.enableItemId.asObservable()
  }

  addItem(item: Vuelo){
    this.shopCart.vuelos.push(item)
    this.shopCart!.precioTotal += item.precio
    this.shoppingCart.next(this.shopCart)
  }

  enableItem(id: number){
    this.enableItemId.next(id)
  }

  getShopCart(){
    return this.shopCart$
  }
}
