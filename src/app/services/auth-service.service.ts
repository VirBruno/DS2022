import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tipo } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private apiUrl= environment.apiUrl

  private role = new BehaviorSubject<string | Tipo>('');
  private sigueLogueado$= new BehaviorSubject<any>(null);

  constructor(
    private http:HttpClient,
    private router: Router
  ) { 
    this.checkToken()
  }

  get isLogged$(): Observable<boolean > {
    return this.sigueLogueado$.asObservable();
  }

  public login(data:any): any {
    const url = 'auth/login';
    return this.http.post<any>(this.apiUrl + '/login',data);
  }

  public logout(){
    localStorage.removeItem('jwt');
    localStorage.removeItem('rol');
    this.sigueLogueado$.next(false);
    this.router.navigateByUrl('/auth/login')
  }

  public rol(): Observable<Tipo | string> {
    this.getRol()
    return this.role.asObservable();
  }

   getUser(){
    const user = JSON.parse(localStorage.getItem('rol')!)
    return user
  }

  private getRol(){
    const user = JSON.parse(localStorage.getItem('rol')!) 
    this.role.next(user.user.rol)
  }

  public loginExitoso(){
    this.sigueLogueado$.next(true);
  }
  public register(data:any):any{
    const url='profesional/create';
    return this.http.post<any>(this.apiUrl + '/register',data);
  }

  private checkToken(){
    const token = JSON.parse(localStorage.getItem('jwt')!) || null;
    if (token) {
      this.loginExitoso()
    }else {
      this.logout()
    }
  }
}
