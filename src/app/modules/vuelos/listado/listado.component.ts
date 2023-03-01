import { Component, Input, OnInit } from '@angular/core';
import { ShopCart } from 'src/app/interfaces/shopcart.interface';
import { Vuelo } from 'src/app/interfaces/vuelo.interface';
import { ShopCartService } from 'src/app/services/shop-cart.service';
import { Tipo } from 'src/app/interfaces/user.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private shopCartSvc: ShopCartService,
    private _snackBar: MatSnackBar
  ){
    
  }

  ngOnInit(): void {
    this.subscribeToEnableItem()
  }

  addShopCart(){
    const addItem =this.shopCartSvc.addItem(this.vuelo, this.flightType)
    if (addItem) {
      this.disabled= true
    }else{
      this._snackBar.open('Ya existe un vuelo de ida, eliminelo para agregar otro', '', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5000
      })
    }
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
