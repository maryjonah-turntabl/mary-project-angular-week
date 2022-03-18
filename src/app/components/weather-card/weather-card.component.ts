import { Component, OnInit } from '@angular/core';
import { WeatherdataService } from 'src/app/Services/weatherdata.service';
import { Weather } from 'src/app/models/Weather';
import { WeatherDescription } from 'src/app/models/WeatherDescription';
import { faCloud, faSun, faFlag } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {

  weather?: Weather;
  weatherDescription!: WeatherDescription;

  // variables to switch between temperature values
  degree_fahrenheit: number = 0;
  degree_celsius: number = 0;
  btnState = true;

  currentDate = new Date();

  // fontawesome
  faCloud = faCloud
  faFlag=faFlag


  constructor(private weatherService: WeatherdataService) { }

  ngOnInit(): void {
    this.loadWeatherInfo();
  }

  loadWeatherInfo() {
    this.weatherService.load().subscribe(data => {
      this.weather = data;
      this.degree_celsius = this.weather.main.temp - 274.15;
      this.weatherDescription = this.weather?.weather[0];
      console.log(this.weather);
    })
  }

  loadFahrenheit() {
    this.btnState = !this.btnState;
    this.degree_fahrenheit = (this.degree_celsius * 9/5) + 32
    return this.degree_fahrenheit;
  }

  loadCelsius() {
    this.btnState = !this.btnState;
    this.degree_celsius = (this.degree_fahrenheit - 32) * 5/9;
    return this.degree_celsius
  }

}
