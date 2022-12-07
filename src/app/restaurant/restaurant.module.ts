import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

@NgModule({
  declarations: [
    RestaurantsComponent,
    AddRestaurantComponent,
    EditRestaurantComponent,
  ],
  imports: [CommonModule],
  exports: [
    RestaurantsComponent,
    AddRestaurantComponent,
    EditRestaurantComponent,
  ],
})
export class RestaurantModule {}
