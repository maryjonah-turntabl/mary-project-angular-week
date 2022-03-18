import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutAppComponent } from './components/about-app/about-app.component';
import { RetrospectiveComponent } from './components/retrospective/retrospective.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';

const routes: Routes = [
  { path: 'about', component: AboutAppComponent},
  { path: 'retro', component: RetrospectiveComponent},
  { path: '', component: WeatherCardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
