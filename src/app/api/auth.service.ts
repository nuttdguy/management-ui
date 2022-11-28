import {
  HttpClient,
  HttpEvent,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  public register(formData: FormGroup) {
    const user = new User(
      formData.value.userName || '',
      formData.value.firstName || '',
      formData.value.lastName || '',
      formData.value.password || '',
      formData.value.confirmPassword || ''
    );
    return this.httpClient.post('auth/register', user);
  }

  public login(formData: FormGroup) {
    return this.httpClient.head('auth/login', {
      headers: {
        userName: formData.value.userName,
        password: formData.value.password,
      },
    });
  }

  public forgotPwd(formData: FormGroup) {
    return this.httpClient.post('auth/forgot', formData.value);
  }

  public logout() {
    return this.httpClient.post('auth/logout', {});
  }
}
