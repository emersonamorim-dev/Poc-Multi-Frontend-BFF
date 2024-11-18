import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3081';  

  constructor(private http: HttpClient) {}


  register(name: string, email: string, password: string): Observable<any> {
    const body = { name, email, password };
    return this.http.post<any>(`${this.apiUrl}/register`, body).pipe(
      catchError((error) => {
        console.error('Erro no backend:', error);
        return throwError(error);  
      })
    );
  }
  


  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post<any>(`${this.apiUrl}/authenticate`, body); 
  }
}



