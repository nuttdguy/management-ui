import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../api/auth.service';
import { Dish } from '../models/dish';

@Injectable({
  providedIn: 'root',
})
export class DishService implements OnInit {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  public loadDishes(): Observable<Dish[]> {
    return this.httpClient.get<Dish[]>('/restaurants/dishes', {
      headers: {
        authorization: 'Bearer ' + this.authService.getAuthToken(),
      },
    });
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
