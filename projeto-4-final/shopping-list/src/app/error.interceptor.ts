import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(err => {
        let errorMessage = '';

        if (err.error instanceof ErrorEvent) {
          // erro rede
          errorMessage = 'Um erro de rede ocorreu. Verifique sua conexão.';
        } else {
          // erros servidor
          switch (err.status) {
            case 400:
              errorMessage = 'Solicitação malformada. Verifique os dados enviados.';
              break;
            case 401:
              errorMessage = 'Não autorizado. Por favor, faça login novamente.';
              break;
            case 403:
              errorMessage = 'Acesso proibido. Você não tem permissão para acessar este recurso.';
              break;
            case 404:
              errorMessage = 'Recurso não encontrado. A página pode ter sido removida.';
              break;
            case 500:
              errorMessage = 'Erro interno do servidor. Tente novamente mais tarde.';
              break;
            default:
              errorMessage = 'Um erro inesperado ocorreu. Tente novamente.';
          }
        }

        console.error('Erro ocorrido:', err);

        return throwError(errorMessage);
      })
    );
  }
}