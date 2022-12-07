import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDishComponent } from './add-dish/add-dish.component';
import { DishesComponent } from './dishes/dishes.component';
import { EditDishComponent } from './edit-dish/edit-dish.component';

@NgModule({
  declarations: [DishesComponent, AddDishComponent, EditDishComponent],
  imports: [CommonModule],
  exports: [DishesComponent, AddDishComponent, EditDishComponent],
})
export class DishModule {}
