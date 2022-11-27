import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { SideBarComponent } from 'src/app/side-bar/side-bar.component';
import { TopBarComponent } from 'src/app/top-bar/top-bar.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { AddRestaurantComponent } from './pages/add-restaurant/add-restaurant.component';
import { EditRestaurantComponent } from './pages/edit-restaurant/edit-restaurant.component';
import { DishesComponent } from './pages/dishes/dishes.component';
import { AddDishComponent } from './pages/add-dish/add-dish.component';
import { EditDishComponent } from './pages/edit-dish/edit-dish.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';
import { AuthService } from './api/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    SideBarComponent,
    TopBarComponent,
    DashboardComponent,
    LayoutComponent,
    AddRestaurantComponent,
    EditRestaurantComponent,
    DishesComponent,
    AddDishComponent,
    EditDishComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
