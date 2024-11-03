import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de Compras';

  constructor(private auth: AuthService, private router: Router) {
    this.auth.appState$.subscribe(appState => {
      if (appState && appState.target) {
        this.router.navigateByUrl(appState.target);
      }
    });
  }
}
