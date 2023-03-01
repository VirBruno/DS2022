import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Reserva, reservaPayload } from 'src/app/interfaces/reserva.interface';
import { ShopCart } from 'src/app/interfaces/shopcart.interface';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { PagoService } from 'src/app/services/pago.service';
import { ReservaService } from 'src/app/services/reserva.service';
import { ShopCartService } from 'src/app/services/shop-cart.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.scss']
})
export class PagoComponent implements OnInit{

  formPagos= new FormGroup({
    metodoPago: new FormControl(null, [Validators.required]),
    numeroTarjeta: new FormControl(null),
    nombrePropietario: new FormControl(null),
    codSeguridad: new FormControl(null),
    fechaVencimiento: new FormControl(),
    dni: new FormControl(null),
    codigoBarras: new FormControl(null ),
    cvu: new FormControl(null),
  })

  carritoCompras!: ShopCart;
  user!: any;
  metodosPago= [
    {
      tipo: 1,
      descripcion: 'Tarjeta crédito'
    },
    {
      tipo: 2,
      descripcion: 'Pago fácil'
    },
    {
      tipo: 3,
      descripcion: 'Transferencia'
    }
  ]

  constructor(
    private shopCartSvc: ShopCartService,
    private reservaSvc: ReservaService,
    private authSvc: AuthServiceService
  ){

  }

  ngOnInit(): void {
    this.user = this.authSvc.getUser()
    this.shopCartSvc.getShopCart()
    .subscribe({
      next: (carrito)=> {
        this.carritoCompras = carrito
        console.log('carrito desde pagos', this.carritoCompras)
      }
    })
  }

  pagar(){
    let reserva: reservaPayload = {
      id_vuelo_ida : this.vueloIda?.id_vuelo,
      id_vuelo_vuelta: this.vueloVuelta?.id_vuelo,
      id_pago: 1,
      precio: this.precio,
      estado: 'CREADA',
      id_usuario: this.user.user.id_usuario
    }
    console.log(this.user)
    this.reservaSvc.addReserva(reserva).subscribe({
      next: res => {
        console.log(res)
      }
    })
  }

  cancel(){

  }

  get pagos(){
    return this.formPagos as FormGroup
  }

  get vueloIda(){
    return this.carritoCompras.vuelo_ida
  }

  get vueloVuelta(){
    return this.carritoCompras.vuelo_vuelta
  }

  get precio(){
    return this.carritoCompras.precioTotal
  }

  get metodoPago(){
    return this.formPagos.get("metodoPago") as FormControl
  }

}





