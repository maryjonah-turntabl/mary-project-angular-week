import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherdataService } from './Services/weatherdata.service';
import { HttpClientModule } from '@angular/common/http';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { AboutAppComponent } from './components/about-app/about-app.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent,
    AboutAppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherdataService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
