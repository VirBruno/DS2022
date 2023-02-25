import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aeropuerto } from '../interfaces/aeropuerto.interface';

@Injectable({
  providedIn: 'root'
})
export class AeropuertoService {

  private apiUrl= environment.apiUrl

  constructor(
    private httpClient: HttpClient
  ) { }

  getAeropuertos():Observable<Aeropuerto[]>{
    return this.httpClient.get<Aeropuerto[]>(this.apiUrl + '/aeropuerto/getAll')
  }
}
