import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {

  constructor(
    private authSvc: AuthServiceService
  ){

  }

  canActivate(): Observable<boolean> {
    return this.authSvc.isLogged$
    .pipe(
      take(1),
      map((isLogged: boolean) =>(!isLogged ? true: false))
    );
  }
  
}
