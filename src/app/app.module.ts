import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantsComponent } from '../pages/restaurants/restaurants.component';
import { SideBarComponent } from 'src/components/side-bar/side-bar.component';
import { TopBarComponent } from 'src/components/top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    SideBarComponent,
    TopBarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
