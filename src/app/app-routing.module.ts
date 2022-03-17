import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutAppComponent } from './components/about-app/about-app.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';

const routes: Routes = [
  { path: 'about', component: AboutAppComponent},
  { path: '', component: WeatherCardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
