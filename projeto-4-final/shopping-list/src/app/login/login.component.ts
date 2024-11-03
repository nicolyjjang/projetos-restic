import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isAuthenticated$!: Observable<boolean>; 

  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.auth.isAuthenticated$;
  
    this.isAuthenticated$.subscribe((isAuthenticated) => {
      console.log('isAuthenticated:', isAuthenticated); 
      if (isAuthenticated) {
        this.router.navigate(['/lista']);
      }
    });
  }  

  login() {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout({
      logoutParams: { returnTo: window.location.origin },
    });
  }
}
