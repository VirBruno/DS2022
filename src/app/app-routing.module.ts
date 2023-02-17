import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:'auth',
    loadChildren: ()=>
      import('./modules/main/main.module').then((m)=> m.MainModule)
  },
  { 
    path: 'vuelos', 
    loadChildren: () => 
    import('./modules/vuelos/vuelos.module').then(m => m.VuelosModule) 
  }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
