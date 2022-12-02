import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../api/auth.service';
import { Restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  loadRestaurants(): Observable<Restaurant[]> {
    return this.httpClient.get<Restaurant[]>('restaurants', {
      headers: {
        authorization: 'Bearer ' + this.authService.getAuthToken(),
      },
    });
  }
}
