import { Component, Input, OnInit } from '@angular/core';
import { ShopCart } from 'src/app/interfaces/shopcart.interface';
import { Vuelo } from 'src/app/interfaces/vuelo.interface';
import { ShopCartService } from 'src/app/services/shop-cart.service';
import { Tipo } from 'src/app/interfaces/user.interface';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})

export class ListadoComponent implements OnInit {

  @Input() vuelo! :Vuelo
  @Input() type! :Tipo | string;
  @Input()flightType!: string
  @Input() momento?: string;

  disabled:boolean = false;

  constructor(
    private shopCartSvc: ShopCartService
  ){
    
  }

  ngOnInit(): void {
    this.subscribeToEnableItem()
  }

  addShopCart(){
    this.shopCartSvc.addItem(this.vuelo)
    this.disabled= true
  }

  subscribeToEnableItem(){
    this.shopCartSvc.enableItemId$.subscribe({
      next: (id)=>{
        if (id === this.vuelo.id_vuelo) {
          this.disabled = false
        }
      }
    })
  }
}
