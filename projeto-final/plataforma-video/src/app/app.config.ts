import { provideAuth0 } from '@auth0/auth0-angular';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAuth0({
      domain: 'dev-1j5m0raybi7v57cq.us.auth0.com',
      clientId: 'BzKlL3NjkjvYhV49ssNlIczqFSj8F3Qn',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
      useRefreshTokens: true, // permite que a sessao do user seja renovada sem necessidade de logar novamente
      cacheLocation: 'localstorage',
    }),
  ],
}