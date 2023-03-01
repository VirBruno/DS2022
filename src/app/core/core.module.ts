import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';
import { PagoComponent } from './components/modals/pago/pago.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    OnlyNumbersDirective,
    PagoComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    OnlyNumbersDirective
  ]
})
export class CoreModule { }
