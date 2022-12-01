import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../api/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  loadRestaurants() {
    this.httpClient.get('/restaurants', {
      headers: {
        authorization: 'Bearer ' + this.authService.getJwt(),
      },
    });
  }
}
