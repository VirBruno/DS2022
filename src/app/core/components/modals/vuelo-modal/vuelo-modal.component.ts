import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Aeropuerto } from 'src/app/interfaces/aeropuerto.interface';
import { Avion } from 'src/app/interfaces/avion.interface';
import { AeropuertoService } from 'src/app/services/aeropuerto.service';
import { VuelosService } from 'src/app/services/vuelos.service';

@Component({
  selector: 'app-vuelo-modal',
  templateUrl: './vuelo-modal.component.html',
  styleUrls: ['./vuelo-modal.component.scss']
})
export class VueloModalComponent implements OnInit{

  formVuelos= new FormGroup({
    aeropuertoOrigen: new FormControl(null, [Validators.required]),
    aeropuertoDestino: new FormControl(null, [Validators.required]),
    fechaPartida: new FormControl<any>(new Date(), [Validators.required]),
    horaPartida: new FormControl<any>(null, [Validators.required]),
    fechaArribo: new FormControl<any>(new Date(), [Validators.required]),
    horaArribo: new FormControl<any>(null, [Validators.required]),
    avion: new FormControl<Avion | null>(null, [Validators.required]),
    precioAsiento: new FormControl(null, [Validators.required])
  })

  aeropuertos!:Aeropuerto[]
  aviones!:Avion[]

  constructor(
    private aeropuertosSvc: AeropuertoService,
    private vueloSvc: VuelosService,
    private _snackBar: MatSnackBar
  ){

  }

  ngOnInit(): void {
    this.aeropuertosSvc.getAeropuertos().subscribe({
      next: res=>{
        this.aeropuertos = res
      }
    })

    this.aeropuertosSvc.getAviones()
    .subscribe({
      next: res => {
        this.aviones = res
      }
    })
  }

  crearVuelo(){
    const vueloPayload = {
      id_avion: this.avion?.value?.id_avion,
      aeropuertoOrigen: this.aeropuertoOrigen?.value,
      aeropuertoDestino: this.aeropuertoDestino?.value,
      precio: this.precio?.value,
      fechaYHoraPartida: this.fechaYHora(this.fechaPartida!.value, this.horaPartida!.value),
      fechaYHoraArribo: this.fechaYHora(this.fechaArribo!.value, this.horaArribo!.value)
    }

    this.vueloSvc.addVuelo(vueloPayload)
    .subscribe({
      next: res => {
        if (res.status) {
          console.log(res)
          this._snackBar.open(res.message, 'Cerrar',{
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            duration: 3000
          })
        }
      },
      error: err => {
        console.error(err)
      }
    })
  }

  cancel(){

  }

  fechaYHora(fecha: Date , hora: string  ): string{
    const year = fecha.getFullYear();
    const month = String(fecha.getMonth() + 1).padStart(2, '0');
    const day = String(fecha.getDate()).padStart(2, '0');

    const fechaValue = `${year}-${month}-${day} ${hora}`

    return fechaValue
  }

  get vuelos(){
    return this.formVuelos as FormGroup
  }

  get avion(){
    return this.formVuelos.get('avion')
  }

  get aeropuertoOrigen(){
    return this.formVuelos.get('aeropuertoOrigen')
  }

  get aeropuertoDestino(){
    return this.formVuelos.get('aeropuertoDestino')
  }

  get fechaPartida(){
    return this.formVuelos.get('fechaPartida')
  }

  get fechaArribo(){
    return this.formVuelos.get('fechaArribo')
  }

  get horaPartida(){
    return this.formVuelos.get('horaPartida')
  }

  get horaArribo(){
    return this.formVuelos.get('horaArribo')
  }

  get precio(){
    return this.formVuelos.get('precioAsiento')
  }
}
