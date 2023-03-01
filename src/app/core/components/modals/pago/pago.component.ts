import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Reserva } from 'src/app/interfaces/reserva.interface';
import { PagoService } from 'src/app/services/pago.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.scss']
})
export class PagoComponent implements OnInit{

    formPagos= new FormGroup({
      metodoPago: new FormControl(null, [Validators.required]),
      ultimosNumerosTarjeta: new FormControl(null, [Validators.required]),
      codigoBarras: new FormControl(null, [Validators.required]),
      cvu: new FormControl(null, [Validators.required]),
})

reservas!:Reserva[]

metodosPago= [
  {
    tipo: 1,
    descripcion: 'Tarjeta crédito'
  },
  {
    tipo: 2,
    descripcion: 'Pago Fácil'
  },
  {
    tipo: 3,
    descripcion: 'Trasnferencia'
  }
]

constructor(
  private pagoSvc: PagoService
){

}

ngOnInit(): void {
  this.pagoSvc.getAllReservas().subscribe({
    next: res=>{
      this.reservas = res
    }
  })
}

pagar(){
  console.log(this.pagos.value)
}

cancel(){

}

get pagos(){
  return this.formPagos as FormGroup
}

get totalReservas(): number {
  let total:number=0 
  this.reservas.forEach(reserva=>{
    total=total+reserva.precio
  })
  return total
}  

get metodoPago(){
  return this.formPagos.get("metodoPago") as FormControl
}

}





