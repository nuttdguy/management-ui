import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from 'src/app/models/address';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent implements OnInit {
  restaurants$: Observable<Restaurant[]> | undefined;

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.restaurants$ = this.restaurantService.loadRestaurants();
  }

  formatAddress(address: Address | any) {
    return (
      address.address1 +
      ', ' +
      address.city +
      ', ' +
      address.state +
      ', ' +
      address.zip
    );
  }
}
