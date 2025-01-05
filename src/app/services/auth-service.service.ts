import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5262/api';
  constructor(private http: HttpClient) { }
  getToken(): string | null {
    return localStorage.getItem('token');
}

  isLoggedIn(): boolean {
    return !!this.getToken();
}

  logout(): void {
    localStorage.removeItem('token');
  }
}
