import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MainRoutingModule } from './main-routing.module';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class MainModule { }
