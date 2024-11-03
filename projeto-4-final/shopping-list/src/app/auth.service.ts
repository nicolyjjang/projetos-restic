import { Injectable } from '@angular/core';
import { AuthService as Auth0Service, User } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router'; 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth0: Auth0Service, private router: Router) {} 

  login(): void {
    this.auth0.loginWithRedirect();
  }

  logout(): void {
    this.auth0.logout();
    this.router.navigate(['/login']); 
  }

  isAuthenticated(): Observable<boolean> {
    return this.auth0.isAuthenticated$;
  }

  getUser(): Observable<User | null> {
    return this.auth0.user$.pipe(
      map(user => user ?? null)
    );
  }
}