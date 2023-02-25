import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { vuelosPayload } from '../interfaces/vuelos.interface';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {
  
  apiUrl = environment.apiUrl

  constructor(
    private httpClient: HttpClient
  ) { 

  }

  searchVuelos(payload:vuelosPayload):Observable<any>{
  return this.httpClient.post(this.apiUrl + '/vuelosPorFecha', payload)
  }
}
