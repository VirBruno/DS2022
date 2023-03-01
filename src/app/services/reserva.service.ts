import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { reservaPayload } from '../interfaces/reserva.interface';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  apiUrl = environment.apiUrl
  constructor(
    private http: HttpClient
  ) { 

  }

  addReserva(payload: reservaPayload):Observable<any>{
    return this.http.post(this.apiUrl + '/reserva/new', payload)
  }
}
