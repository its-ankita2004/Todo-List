import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface AuthResponse {
  messege: string;
  access_token: string;
  token_type: string;

}

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private apiUrl = 'https://fastapi-auth-aq3c.onrender.com';

  constructor(private http: HttpClient) { }

  register(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { email, password });
  }
login(email: string, password: string): Observable<any> {
  return this.http.post<any>(
    `${this.apiUrl}/login`,
    { email, password },
    {
      withCredentials: true  // <-- Required to accept cookies!
    }
  );
}

  getProtected(): Observable<any> {
     return this.http.get(`${this.apiUrl}/protected`, {
      withCredentials: true,
    });
  }
}

