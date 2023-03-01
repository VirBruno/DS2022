import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VuelosRoutingModule } from './vuelos-routing.module';
import { VuelosComponent } from './vuelos.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ListadoComponent } from './listado/listado.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservaComponent } from './reserva/reserva.component';


@NgModule({
  declarations: [
    VuelosComponent,
    BusquedaComponent,
    ListadoComponent,
    ReservaComponent,
    
  ],
  imports: [
    CommonModule,
    VuelosRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class VuelosModule { }
