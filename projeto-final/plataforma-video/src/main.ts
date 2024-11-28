import { bootstrapApplication } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { VideoService } from './app/video.service';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      AuthModule.forRoot({
        domain: 'dev-1j5m0raybi7v57cq.us.auth0.com',
        clientId: 'BzKlL3NjkjvYhV49ssNlIczqFSj8F3Qn',
        authorizationParams: {
          redirect_uri: window.location.origin, // Isso deve ser http://localhost:4200
        },
      })
    ),
    VideoService,
  ]
});
