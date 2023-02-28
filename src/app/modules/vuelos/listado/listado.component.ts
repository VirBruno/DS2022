import { Component, Input, OnInit } from '@angular/core';
import { Vuelo } from 'src/app/interfaces/vuelo.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  @Input() vuelo! :Vuelo
  type :string = 'back office';
  @Input()flightType!: string

  constructor(){

  }

  ngOnInit(): void {
  }
}
