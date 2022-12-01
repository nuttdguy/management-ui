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

  public setUserToLocalStorage(header: HttpHeaders) {
    localStorage.setItem(
      'user',
      JSON.stringify({
        userName: header.get('userName'),
        jwt: header.get('authorization'),
      })
    );
  }

  public forgotPwd(formData: FormGroup) {
    return this.httpClient.post('auth/forgot', formData.value);
  }

  public logout() {
    return this.httpClient.post('auth/logout', {});
  }
}
