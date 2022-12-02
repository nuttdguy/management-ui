import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantTableRowComponent } from './restaurant-table-row/restaurant-table-row.component';

@NgModule({
  declarations: [RestaurantTableRowComponent],
  imports: [CommonModule],
  exports: [RestaurantTableRowComponent],
})
export class RestaurantModule {}
