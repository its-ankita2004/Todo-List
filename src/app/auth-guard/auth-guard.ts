import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { Auth } from '../auth';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private auth : Auth, private router : Router) {}

 canActivate(): Observable<boolean | UrlTree> {
    return this.auth.getProtected().pipe(
      map(() => true), // user is authenticated
      catchError(() => of(this.router.createUrlTree(['/login'])))
    );
  }

  isTokenExpired(token: string): boolean {
    const payload = JSON.parse(atob(token.split('.')[1]));
      const expiry = payload.exp;
      const now = Math.floor(new Date().getTime() / 1000); // Current time in seconds
      return expiry < now;
    }
}
