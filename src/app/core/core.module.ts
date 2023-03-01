import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OnlyNumbersDirective,
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
