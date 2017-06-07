import { Component, OnInit } from '@angular/core';

import { Car } from '../../models/car';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cars: Car[];

  constructor(
    private carService: CarService
  ) { }

  ngOnInit() {
    this.carService.getCars().subscribe(cars => this.cars = cars);
  }

}
