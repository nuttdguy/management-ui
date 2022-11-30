import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantTableRowComponent } from './restaurant-table-row/restaurant-table-row.component';
import { RestaurantTableHeaderComponent } from './restaurant-table-header/restaurant-table-header.component';

@NgModule({
  declarations: [RestaurantTableRowComponent, RestaurantTableHeaderComponent],
  imports: [CommonModule],
  exports: [RestaurantTableRowComponent, RestaurantTableHeaderComponent],
})
export class RestaurantModule {}
