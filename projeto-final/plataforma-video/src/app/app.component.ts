import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { routes } from '../app/app.routes';
import { SearchComponent } from "./search/search.component";

@Component({
  selector: 'app-root',
  imports: [HomeComponent, ProfileComponent, CommonModule, LoginComponent, SearchComponent, RouterModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent implements OnInit {
  title = 'plataforma-videos';
  returnToUrl = window.location.origin;

  isAuthenticated$: any;

  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.isAuthenticated$ = this.auth.isAuthenticated$;

    this.auth.appState$.subscribe(appState => {
      if (appState && appState.target) {
        this.router.navigateByUrl(appState.target);
      } else {
        this.router.navigate(['/home']); 
      }
    });
  }

  logout() {
    this.auth.logout({ logoutParams: { returnTo: this.returnToUrl } });
  }
}