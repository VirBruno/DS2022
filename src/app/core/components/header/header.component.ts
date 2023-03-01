import { Component, OnInit, ViewChild } from '@angular/core';
import { ShopCart } from 'src/app/interfaces/shopcart.interface';
import { AuthServiceService } from 'src/app/services/auth-service.service';
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
  isLogged= false;
  userRol!: string;
  shoppingCart!:ShopCart
  
  @ViewChild('sidenav')sidenav!: SidenavComponent;

  constructor(
    private shopCartSvc: ShopCartService,
    private authSvc: AuthServiceService
  ) { }

  ngOnInit(): void {
    this.authSvc.isLogged$
    .subscribe({
      next: (res)=> {
        this.isLogged = res
        console.log(res)
      }
    })
    this.shopCartSvc.getShopCart()
    .subscribe({
      next: (res)=> {
        this.shoppingCart = res
      }
    })

    this.authSvc.rol()
    .subscribe({
      next: res=> {
        this.userRol = res
      }
    })
  }

  logout(){
    this.authSvc.logout()
  }

  deleteItem(index: number){
    const itemId = this.shoppingCart.vuelos[index].id_vuelo
    console.log('id vuelo eliminado',itemId)
    this.shopCartSvc.enableItem(itemId)
    this.shoppingCart.precioTotal -= this.shoppingCart.vuelos[index].precio
    this.shoppingCart.vuelos.splice(index, 1)
  }

  onOpenSidenav(){
    console.log(this.sidenav)
    this.openSidenav = true
  }

}
