import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ShopCart } from 'src/app/interfaces/shopcart.interface';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ModalService } from 'src/app/services/modal.service';
import { ShopCartService } from 'src/app/services/shop-cart.service';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  openSidenav!:boolean
  openedSidenav=false;
  isLogged= false;
  userRol!: string;
  shoppingCart!:ShopCart
  
  @ViewChild('sidenav')sidenav!: SidenavComponent;

  constructor(
    private shopCartSvc: ShopCartService,
    private authSvc: AuthServiceService,
    private modalSvc: ModalService,
    private _snackBar: MatSnackBar
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

  deleteItem(index: number, type:string){
    if (type === 'ida') {
      this.shoppingCart.precioTotal -= this.shoppingCart.vuelo_ida?.precio!;
      this.shoppingCart.vuelo_ida = null;
    }else {
      this.shoppingCart.precioTotal -= this.shoppingCart.vuelo_vuelta?.precio!;
      this.shoppingCart.vuelo_vuelta = null
    }
   
    this.shopCartSvc.enableItem(index)
  }

  openPagoModal(){
    let dialogRef= this.modalSvc.openPagoModal()

    dialogRef.afterClosed()
    .subscribe(res => {
      if (res) {
        this._snackBar.open('Reserva pagada', '', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 5000
        })
      }
    })
  }

  onOpenSidenav(){
    console.log(this.sidenav)
    this.openSidenav = true
  }

}
