import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isAuthenticated$: Observable<boolean>; 

  constructor(public auth: AuthService, private router: Router) {
    this.isAuthenticated$ = this.auth.isAuthenticated$; 
  }

  login() {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout();
    window.location.href = window.location.origin; 
  }
}
