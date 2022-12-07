import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dish } from 'src/app/models/dish';
import { DishService } from '../dish.service';
@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss'],
})
export class DishesComponent implements OnInit {
  dishes$: Observable<Dish[]> | undefined;

  constructor(private dishService: DishService) {}

  ngOnInit(): void {
    this.dishes$ = this.dishService.loadDishes();
  }
}
