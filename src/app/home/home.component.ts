import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { WeatherService } from '../weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   
  value: any;
  location: any;
  weather: any;

  

  constructor(private _http:HttpClient,private _weatherde:WeatherService,private router:Router) { }

  ngOnInit() {
    // this.value=localStorage.getItem('city');
    // if(this.value!=null){
    //   this.location=this.value;
    //   console.log(location);
    // }
    // else{
    //   this.location="Madurai";
    // }
    // this._weatherde.getweatherdetails(this.location).subscribe(
    //   response=> {
    //     console.log(response);
    //     this.weather=response;
    //   }
    //   );
  }
  inputvalue(city){
    let location=city;
    localStorage.setItem('location',location);
    console.log(location);
    this.router.navigate(['result']);
  }

}
