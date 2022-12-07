import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantsComponent } from './restaurant/restaurants/restaurants.component';
import { SideBarComponent } from 'src/app/side-bar/side-bar.component';
import { TopBarComponent } from 'src/app/top-bar/top-bar.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { AddRestaurantComponent } from './restaurant/add-restaurant/add-restaurant.component';
import { EditRestaurantComponent } from './restaurant/edit-restaurant/edit-restaurant.component';
import { DishesComponent } from './dish/dishes/dishes.component';
import { AddDishComponent } from './dish/add-dish/add-dish.component';
import { EditDishComponent } from './dish/edit-dish/edit-dish.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { AuthService } from './api/auth.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { RestaurantModule } from './restaurant/restaurant.module';
import { DishModule } from './dish/dish.module';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TopBarComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    RestaurantModule,
    DishModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
