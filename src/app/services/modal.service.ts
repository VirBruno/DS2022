import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VueloModalComponent } from '../core/components/modals/vuelo-modal/vuelo-modal.component';
import { PagoComponent } from '../core/components/modals/pago/pago.component';
import { ConfirmationComponent } from '../core/components/modals/confirmation/confirmation.component';

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

  openPagoModal(){
    const modalRef= this.dialog.open(PagoComponent);
    return modalRef;
  }

  openConfirmationModal(){
    const modalRef = this.dialog.open(ConfirmationComponent)
    return modalRef
  }
}
