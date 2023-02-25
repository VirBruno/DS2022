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

  vuelosAll: Vuelo[] = []

  constructor(
    private modalService:ModalService,
    private vueloSvc: VuelosService
  ){

  }

  ngOnInit(): void {
    this.vueloSvc.getAllVuelos().subscribe({
      next: (res)=> {
        this.vuelosAll = res
      },
      error: err => {
        console.error(err)
      }
    })

  }

  openVuelosModal(){
    this.modalService.openVueloModal()
  }
}
