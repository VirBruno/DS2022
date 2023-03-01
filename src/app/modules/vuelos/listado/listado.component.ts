import { Component, Input, OnInit } from '@angular/core';
import { ShopCart } from 'src/app/interfaces/shopcart.interface';
import { Vuelo } from 'src/app/interfaces/vuelo.interface';
import { ShopCartService } from 'src/app/services/shop-cart.service';
type Tipo = 'FRONTOFFICE' | 'BACKOFFICE';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})

export class ListadoComponent implements OnInit {

  @Input() vuelo! :Vuelo
  @Input() type! :Tipo;
  @Input()flightType!: string
  @Input() momento?: string;

  disabled:boolean = false;

  constructor(
    private shopCartSvc: ShopCartService
  ){
    
  }

  ngOnInit(): void {
  }

  addShopCart(){
    this.shopCartSvc.addItem(this.vuelo)
    this.disabled= true
  }
}
