import { Component, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { Reserva } from 'src/app/interfaces/reserva.interface';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss']
})
export class ReservaComponent implements OnInit{
  @Input() reserva! :Reserva

ngOnInit(): void {
}



}
