import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { title } from 'process';
import { WeatherService } from './weather.service';
import { HomeComponent } from './home/home.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  city: any;
  weather: any;
  constructor(private _http:HttpClient,private _weatherde:WeatherService ,private router:Router) { }
  
  ngOnInit() {
    
  
  }
  findWeather(city){
    
    
    localStorage.setItem('location', JSON.stringify(city));
    //  this.router.navigate(['/home']);
  //   this._weatherde.getweatherdetails(this.city).subscribe(
  //     response=> {
  //       console.log(response);
  //       this.weather=response;
  // }
  //   );
 
}
}

