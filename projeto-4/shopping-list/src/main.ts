import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';

const googleLoginProviderConfig = {
  autoLogin: false,
  providers: [
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider('1017739270305-s7ke5tb4ese09hutbouu37i7cij830aj.apps.googleusercontent.com') 
    }
  ]
};

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    {
      provide: 'SocialAuthServiceConfig',
      useValue: googleLoginProviderConfig
    }
  ]
}).catch((err) => console.error(err));
