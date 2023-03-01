import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private apiUrl= environment.apiUrl
  constructor(private http:HttpClient) { }
  private role = new BehaviorSubject<string>('');
  private sigueLogueado$= new BehaviorSubject<boolean>(false);

  public isLogged(): Observable<boolean> {
    return this.sigueLogueado$.asObservable();
  }

  public login(data:any): any {
    const url = 'auth/login';
    return this.http.post<any>(this.apiUrl + '/login',data);
  }

  public rol(): Observable<string> {
    return this.role.asObservable();
  }
  public loginExitoso(){
    this.sigueLogueado$.next(true);
  }
  public register(data:any):any{
    const url='profesional/create';
    return this.http.post<any>(this.apiUrl + '/register',data);
  }
}
