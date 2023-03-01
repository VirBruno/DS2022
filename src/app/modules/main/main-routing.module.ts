import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckLoginGuard } from 'src/app/core/guards/check-login.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent,
    canActivate: [CheckLoginGuard]
  },
  {
    path: 'registro',
    component: RegisterComponent,
    canActivate: [CheckLoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
