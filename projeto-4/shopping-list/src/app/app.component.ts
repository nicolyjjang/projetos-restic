import { SocialUser, SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Shopping List';
  user: SocialUser | null = null;

  constructor(private socialAuthService: SocialAuthService, private router: Router) {}

  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user; 
      if (this.user) {
        console.log('Usuário autenticado:', this.user);
        this.router.navigate(['/shopping-list']); // Redireciona para a tela de lista de compras se o usuário estiver autenticado
      }
    });
  }

  logout() {
    this.socialAuthService.signOut().then(() => {
      this.user = null; // Limpa o estado do usuário após logout
      this.router.navigate(['/login']); // Redireciona para a tela de login
    }).catch((error) => {
      console.error('Erro ao fazer logout', error);
    });
  }

  isAuthenticated(): boolean {
    return this.user != null; // Retorna true se o usuário estiver autenticado
  }
}
