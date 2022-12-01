import {
  HttpClient,
  HttpContext,
  HttpEvent,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { map, Observable, shareReplay, tap } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // user: User;
  constructor(private httpClient: HttpClient) {}

  public register(formData: FormGroup) {
    return this.httpClient.post('auth/register', formData.value);
  }

  public login(formData: FormGroup): Observable<HttpResponse<any>> {
    return this.httpClient.post('auth/login', null, {
      headers: {
        userName: formData.value.userName,
        password: formData.value.password,
      },
      observe: 'response',
    });
  }

  public setAuthHeaderToLocalStorage(header: HttpHeaders) {
    localStorage.setItem(
      'user',
      JSON.stringify({ userName: header.get('userName') })
    );
    localStorage.setItem(
      'authToken',
      JSON.stringify({ jwt: header.get('authorization') })
    );
  }

  public getAuthToken(): string | null {
    const authToken: string | null = localStorage.getItem('authToken');
    return authToken ? JSON.parse(authToken).jwt : null;
  }

  public getUser(): string | null {
    const user: string | null = localStorage.getItem('user');
    return user ? JSON.parse(user).user : null;
  }

  public forgotPwd(formData: FormGroup): Observable<HttpResponse<any>> {
    return this.httpClient.post('auth/password/forgot', formData.value, {
      observe: 'response',
    });
  }

  public logout() {
    return this.httpClient.post('auth/logout', {});
  }
}
