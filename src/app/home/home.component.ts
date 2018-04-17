import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  reports;
  
  constructor(service: HomeService) {
    this.reports = service.getWeatherReport();
  }

  ngOnInit() {
  }

}
