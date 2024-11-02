import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: SocialUser | null = null;

  constructor(private socialAuthService: SocialAuthService) { }

  loginWithGoogle(){
    return this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logout(){
    this.socialAuthService.signOut();
    this.user = null; // limpa o user apos o logout
  }

  isAuthenticated(): boolean{
    return this.user != null; // retorna true ou false, com base na verificacao
  }

  setUser(user: SocialUser){
    this.user = user;
  }
}
