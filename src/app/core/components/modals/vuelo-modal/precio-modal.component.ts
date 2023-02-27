import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Aeropuerto } from 'src/app/interfaces/aeropuerto.interface';
import { AeropuertoService } from 'src/app/services/aeropuerto.service';

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
    horaPartida: new FormControl(null, [Validators.required]),
    fechaArribo: new FormControl(null, [Validators.required]),
    horaArribo: new FormControl(null, [Validators.required]),
    avion: new FormControl(null, [Validators.required]),
    precioAsiento: new FormControl(null, [Validators.required])
  })

  aeropuertos!:Aeropuerto[]

  constructor(
    private aeropuertosSvc: AeropuertoService
  ){

  }

  ngOnInit(): void {
    this.aeropuertosSvc.getAeropuertos().subscribe({
      next: res=>{
        this.aeropuertos = res
      }
    })
  }

  crearVuelo(){
    console.log(this.vuelos.value)
  }

  cancel(){

  }
  get vuelos(){
    return this.formVuelos as FormGroup
  }
}
