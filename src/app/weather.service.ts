import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class WeatherService {
apiKey='5c73e63a60173b59f6b7b82ec4f89bd8';
url;
unit='metric';

  constructor(private _http:HttpClient) {
 this.url='http://api.openweathermap.org/data/2.5/weather?q';
   }
   getweatherdetails(city){
    return this._http.get(this.url + '='+city+'&appid=' + this.apiKey+'&units='+this.unit);
   }
}
