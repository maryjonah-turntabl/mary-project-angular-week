import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../models/Weather';

@Injectable({
  providedIn: 'root'
})

export class WeatherdataService {

  constructor(private http: HttpClient) { }

  // load(): Observable<Weather>{
  //   return this.http.get<Weather>("https://api.openweathermap.org/data/2.5/weather?lat=5.614818&lon=-0.205874&appid=de04128264d84333b53a1d2455438b31");
  // }

  load(){
    return this.http.get<Weather>("https://api.openweathermap.org/data/2.5/weather?lat=5.614818&lon=-0.205874&appid=de04128264d84333b53a1d2455438b31");
  }
}
