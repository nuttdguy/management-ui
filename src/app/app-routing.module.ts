import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSerializer } from '@angular/router';
import { AddDishComponent } from './dish/add-dish/add-dish.component';
import { AddRestaurantComponent } from './restaurant/add-restaurant/add-restaurant.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DishesComponent } from './dish/dishes/dishes.component';
import { EditDishComponent } from './dish/edit-dish/edit-dish.component';
import { EditRestaurantComponent } from './restaurant/edit-restaurant/edit-restaurant.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RestaurantsComponent } from './restaurant/restaurants/restaurants.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'dashboard',
    // loadChildren: () => import('./dashboard/dashboard-routing.module').then(mod => mod.)
    children: [
      { path: '', component: DashboardComponent },
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
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      useHash: false,
      scrollPositionRestoration: 'enabled',
      paramsInheritanceStrategy: 'always',
      relativeLinkResolution: 'corrected',
      malformedUriErrorHandler: (
        error: URIError,
        urlSerializer: UrlSerializer,
        url: string
      ) => urlSerializer.parse('/not-found'),
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
