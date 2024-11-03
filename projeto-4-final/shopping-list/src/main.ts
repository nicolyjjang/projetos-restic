import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAuth0 } from '@auth0/auth0-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { ErrorInterceptor } from './app/error.interceptor'; 
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideAuth0({
      domain: 'dev-t7yqp75vwtaql4r5.us.auth0.com',
      clientId: 'hBUVeB6Ed0OrKIq1N1sdQWMtriGm5xBf',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    provideRouter(routes)
  ]
});