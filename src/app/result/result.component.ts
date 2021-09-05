import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  cityName:any;
  weather:any;
  imageUrl:any;
  icon:any;
  constructor(private _weatherde:WeatherService,private router:Router) { }

  ngOnInit() {
    this.cityName=localStorage.getItem('location');
    if(this.cityName==''){
      this.router.navigate(['error']);

    }
    else{
    
    this._weatherde.getweatherdetails(this.cityName).subscribe(
      response =>{
        console.log(response);
        this.weather=response;
        console.log(this.cityName);
        this.icon=this.weather.weather[0].icon;
        this.imageUrl='https://openweathermap.org/img/wn/' +this.icon +'@2x.png';

      }
    );
  }
}
  
  public onshow(){
    this.router.navigate(['home']);
  }

}
// backToHome() {
//   this.router.navigate(['home']);
// }

