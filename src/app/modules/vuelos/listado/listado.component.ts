import { Component, Input, OnInit } from '@angular/core';
import { Vuelo } from 'src/app/interfaces/vuelo.interface';
type Tipo = 'FRONTOFFICE' | 'BACKOFFICE';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})

export class ListadoComponent implements OnInit {

  @Input() vuelo! :Vuelo
  @Input() type! :Tipo;
  @Input()flightType!: string
  @Input() momento?: string;

  constructor(){

  }

  ngOnInit(): void {
  }
}
