import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VueloModalComponent } from 'src/app/core/components/modals/vuelo-modal/vuelo-modal.component';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.scss']
})
export class VuelosComponent implements OnInit{

  vuelos= [1,2,3,4,5,6,7]
  constructor(
    private modalService:ModalService,
  ){

  }

  ngOnInit(): void {
    
  }

  openVuelosModal(){
    this.modalService.openVueloModal()
  }
}
