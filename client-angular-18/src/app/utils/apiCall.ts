import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCall {

  constructor(private http: HttpClient) {}

  request(method: string, url: string, body: any = null) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const options = {
      headers: headers,
      body: body ? JSON.stringify(body) : null
    };

    switch (method.toUpperCase()) {
      case 'GET':
        return this.http.get(url, options).pipe(catchError(this.handleError));
      case 'POST':
        return this.http.post(url, body, { headers }).pipe(catchError(this.handleError));
      case 'PUT':
        return this.http.put(url, body, { headers }).pipe(catchError(this.handleError));
      case 'DELETE':
        return this.http.delete(url, options).pipe(catchError(this.handleError));
      default:
        return throwError(() => new Error('Método HTTP não suportado'));
    }
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Erro desconhecido';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Erro: ${error.error.message}`;
    } else {
      errorMessage = `Código do servidor: ${error.status}, Mensagem: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
