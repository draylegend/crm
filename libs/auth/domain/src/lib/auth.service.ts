import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse, LoginInput, RegisterInput } from '@crm/auth/api';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login$(input: Partial<LoginInput>): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('auth/login', input);
  }

  register$(input: Partial<RegisterInput>): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('auth/register', input);
  }
}
