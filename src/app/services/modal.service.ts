import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VueloModalComponent } from '../core/components/modals/vuelo-modal/vuelo-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private dialog: MatDialog
  ) { }

  openVueloModal(){
    const modalRef= this.dialog.open(VueloModalComponent);
    return modalRef;
  }
}
