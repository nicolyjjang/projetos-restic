import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; 
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ListaDeComprasComponent } from './lista-de-compras/lista-de-compras.component';
import { AuthButtonComponent } from './auth-button/auth-button.component';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListaDeComprasComponent,
    AuthButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routes, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
