import { Component, OnInit, ViewChild } from '@angular/core';
import { ShopCart } from 'src/app/interfaces/shopcart.interface';
import { ShopCartService } from 'src/app/services/shop-cart.service';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  openSidenav!:boolean
  events:string[]=[]
  openedSidenav=false;
  isLogged= true;

  shoppingCart!:ShopCart
  
  @ViewChild('sidenav')sidenav!: SidenavComponent;

  constructor(
    private shopCartSvc: ShopCartService
  ) { }

  ngOnInit(): void {
    this.shopCartSvc.getShopCart()
    .subscribe({
      next: (res)=> {
        this.shoppingCart = res
        console.log(this.shoppingCart)
      }
    })
  }

  deleteItem(index: number){
    this.shoppingCart.precioTotal -= this.shoppingCart.vuelos[index].precio
    this.shoppingCart.vuelos.splice(index, 1)
  }

  onOpenSidenav(){
    console.log(this.sidenav)
    this.openSidenav = true
  }

}
