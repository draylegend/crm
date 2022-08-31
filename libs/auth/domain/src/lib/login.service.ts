import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse, LoginInput } from '@crm/auth/api';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}

  login$(input: Partial<LoginInput>): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      'http://localhost:3333/api/auth/login',
      input,
    );
  }
}
