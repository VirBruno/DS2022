import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vuelo-modal',
  templateUrl: './vuelo-modal.component.html',
  styleUrls: ['./vuelo-modal.component.scss']
})
export class VueloModalComponent implements OnInit{


  formVuelos= new FormGroup({
    aeropuertoOrigen: new FormControl(null, [Validators.required]),
    aeropuertoDestino: new FormControl(null, [Validators.required]),
    fechaPartida: new FormControl(null, [Validators.required]),
    cantidadAsientos: new FormControl(null, [Validators.required]),
    precioAsiento: new FormControl(null, [Validators.required])
  })

  constructor(){

  }

  ngOnInit(): void {
    
  }

  crearVuelo(){
    console.log(this.vuelos.value)
  }

  get vuelos(){
    return this.formVuelos as FormGroup
  }
}
