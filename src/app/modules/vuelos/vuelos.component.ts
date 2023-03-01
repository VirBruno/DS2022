import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VueloModalComponent } from 'src/app/core/components/modals/vuelo-modal/vuelo-modal.component';
import { Vuelo } from 'src/app/interfaces/vuelo.interface';
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
  titles= ['Proximos vuelos!', 'Resultados de la búsqueda']
  title!: string

  constructor(
    private modalService:ModalService,
    private vueloSvc: VuelosService
  ){
  }

  ngOnInit(): void {
    this.title = this.titles[0]
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
    this.modalService.openVueloModal()
  }

  openPagoModal(){
    this.modalService.openPagoModal()
  }
}
