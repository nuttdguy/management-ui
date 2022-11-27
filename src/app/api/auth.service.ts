import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  noAuthHeader = new HttpHeaders({ 'No-Auth': 'True' });

  constructor(private httpClient: HttpClient) {}

  public register(formData: User) {
    return this.httpClient.post('auth/register', formData, {
      headers: this.noAuthHeader,
    });
  }
}
