import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Aeropuerto } from 'src/app/interfaces/aeropuerto.interface';
import { vuelosPayload } from 'src/app/interfaces/vuelos.interface';
import { AeropuertoService } from 'src/app/services/aeropuerto.service';
import { VuelosService } from 'src/app/services/vuelos.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit{

  aeropuertos!: Aeropuerto[]
  filteredAeropuertosOrigen!: Observable<any> | undefined
  filteredAeropuertosDestino!: Observable<any> | undefined
  formBusqueda = new FormGroup({
    fechaSalida: new FormControl<Date | null>(null),
    fechaVuelta: new FormControl<Date | null>(null),
    aeropuertoOrigen: new FormControl<any>(null, [Validators.required]),
    aeropuertoDestino: new FormControl<any>(null, [Validators.required]),
    cantidadPasajeros: new FormControl<any>(null, [Validators.required])
  });

  constructor(
    private aeropuertosSvc: AeropuertoService,
    private vuelosSvc: VuelosService
  ){

  }

  ngOnInit(): void {
    this.aeropuertosSvc.getAeropuertos().subscribe({
      next: res=>{
        this.aeropuertos = res
      }
    })
  }

  searchVuelos(){
    let busqueda:vuelosPayload={
      origen: this.formBusqueda.controls.aeropuertoOrigen.value,
      destino: this.formBusqueda.controls.aeropuertoDestino.value,
      fechaPartida: this.formBusqueda.controls.fechaSalida.value,
      fechaVuelta: this.formBusqueda.controls.fechaSalida.value
    }
    this.vuelosSvc.searchVuelos(busqueda)
    console.log(busqueda)
  }

  get busqueda(){
    return this.formBusqueda.controls
  }

  get aeropuertosSelect(){
    return this.aeropuertos.map(aeropuerto => aeropuerto.nombre)
  }

  get aeropuertoOrigen(){
    return this.formBusqueda.get('aeropuertoOrigen')
  }

  get aeropuertoDestino(){
    return this.formBusqueda.get('aeropuertoDestino')
  }
}
