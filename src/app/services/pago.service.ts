import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reserva } from '../interfaces/reserva.interface';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

apiUrl = environment.apiUrl

  constructor(
    private httpClient: HttpClient
  ) { }
  
    getAllReservas():Observable<Reserva[]>{
      return this.httpClient.get<Reserva[]>(this.apiUrl + '/reserva/getAll')
    }
}
