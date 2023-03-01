import { Component, OnInit } from '@angular/core';
import { Tipo } from 'src/app/interfaces/user.interface';
import { Vuelo } from 'src/app/interfaces/vuelo.interface';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ModalService } from 'src/app/services/modal.service';
import { VuelosService } from 'src/app/services/vuelos.service';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.scss']
})
export class VuelosComponent implements OnInit{

  vuelosIda: Vuelo[] = []
  vuelosVuelta: Vuelo[] = []
  busquedaRealizada: boolean = false
  titles= ['Proximos vuelos', 'Resultados de la búsqueda']
  title!: string
  userRol!: Tipo | string;

  constructor(
    private modalService:ModalService,
    private vueloSvc: VuelosService,
    private authSvc: AuthServiceService
  ){
  }

  ngOnInit(): void {
    this.title = this.titles[0]
    this.getAllVuelos()

    this.authSvc.rol()
    .subscribe({
      next: (res:Tipo | string)=> {
        this.userRol = res
        console.log(this.userRol)
      }
    })
  }

  getAllVuelos(){
    this.vueloSvc.getAllVuelos().subscribe({
      next: (res)=> {
        this.vuelosIda = res
      },
      error: err => {
        console.error(err)
      }
    })
  }

  realizoBusqueda(value: any){
    console.log(value)
    this.busquedaRealizada = value.busquedaRealizada
    if (value) {
      this.title = this.titles[1]
      this.vuelosIda = value.vuelosEncontrados.ida
      this.vuelosVuelta = value.vuelosEncontrados.vuelta
    }
  }

  openVuelosModal(){
    let modal = this.modalService.openVueloModal()

    modal.afterClosed()
    .subscribe(result =>{
      console.log(result)
    })
  }

  openPagoModal(){
    this.modalService.openPagoModal()
  }
}
