import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDishComponent } from './pages/add-dish/add-dish.component';
import { AddRestaurantComponent } from './pages/add-restaurant/add-restaurant.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DishesComponent } from './pages/dishes/dishes.component';
import { EditDishComponent } from './pages/edit-dish/edit-dish.component';
import { EditRestaurantComponent } from './pages/edit-restaurant/edit-restaurant.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'overview', component: DashboardComponent },
      { path: 'restaurants', component: RestaurantsComponent },
      { path: 'restaurants/add', component: AddRestaurantComponent },
      { path: 'restaurants/edit/:id', component: EditRestaurantComponent },
      { path: 'dishes', component: DishesComponent },
      { path: 'dishes/add', component: AddDishComponent },
      { path: 'dishes/edit/:id', component: EditDishComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
