import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-table-row',
  templateUrl: './restaurant-table-row.component.html',
  styleUrls: ['./restaurant-table-row.component.scss'],
})
export class RestaurantTableRowComponent implements OnInit {
  @Input()
  restaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.loadRestaurants();
  }

  loadRestaurants(): void {
    this.restaurantService.loadRestaurants().subscribe({
      next: (res: Restaurant[]) => {
        this.restaurants = res;

        console.log(this.restaurants);
      },
      error: (err) => {},
      complete: () => {},
    });
  }
}
