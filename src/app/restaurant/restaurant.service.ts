import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(private httpClient: HttpClient) {}

  loadRestaurants() {
    this.httpClient.get('/restaurants', {
      headers: {
        authorization: 'Bearer ',
      },
    });
  }
}
