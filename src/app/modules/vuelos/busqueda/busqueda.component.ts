import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
    fechaSalida: new FormControl<Date | null>(null, [Validators.required]),
    fechaVuelta: new FormControl<Date | null>(null),
    aeropuertoOrigen: new FormControl<any>(null, [Validators.required]),
    aeropuertoDestino: new FormControl<any>(null, [Validators.required]),
    cantidadPasajeros: new FormControl<any>(null, [Validators.required])
  });

  @Output() realizarBusqueda = new EventEmitter<any>();

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
      origen: this.aeropuertoOrigen!.value,
      destino: this.aeropuertoDestino!.value,
      fechaPartida: this.parsearFecha(this.formBusqueda.get('fechaSalida')!.value),
      fechaVuelta: this.parsearFecha(this.formBusqueda.get('fechaVuelta')!.value)
    }
    this.vuelosSvc.searchVuelos(busqueda).subscribe({
      next: (res)=>{
        console.log(res)
        let busqueda = {
          busquedaRealizada: true,
          vuelosEncontrados: res
        }
        this.realizarBusqueda.emit(busqueda)
      }
    })
    
  }

  parsearFecha(fecha: Date | null):string{
    const fechaString= fecha!.toLocaleDateString('es-AR', {year: 'numeric', month: '2-digit', day: '2-digit'})
    return fechaString.substring(6) + '-' +fechaString.substring(3,5) + '-' + fechaString.substring(0,2)
  }

  get busqueda(){
    return this.formBusqueda as FormGroup
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


