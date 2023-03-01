import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShopCart } from 'src/app/interfaces/shopcart.interface';
import { Vuelo } from 'src/app/interfaces/vuelo.interface';
import { ShopCartService } from 'src/app/services/shop-cart.service';
import { Tipo } from 'src/app/interfaces/user.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalService } from 'src/app/services/modal.service';
import { VuelosService } from 'src/app/services/vuelos.service';
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
  @Output() getAll = new EventEmitter<true>();

  disabled:boolean = false;

  constructor(
    private shopCartSvc: ShopCartService,
    private _snackBar: MatSnackBar,
    private modalSvc: ModalService,
    private vueloSvc: VuelosService
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

  

  deleteVuelo(){
    let modal =this.modalSvc.openConfirmationModal()

    modal.afterClosed()
    .subscribe(
      result=> {
        if (result) {
          this.vueloSvc.deleteVuelo(this.vuelo.id_vuelo).subscribe({
            next: res=> {
              this._snackBar.open(res, '', {
                horizontalPosition: 'center',
                verticalPosition: 'top',
                duration: 5000
              })
              this.getAll.emit(true)
            }
          })
        }
      }
    )
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
