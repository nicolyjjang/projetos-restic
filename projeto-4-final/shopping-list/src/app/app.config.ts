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
      domain: 'dev-t7yqp75vwtaql4r5.us.auth0.com',
      clientId: 'hBUVeB6Ed0OrKIq1N1sdQWMtriGm5xBf',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
};