import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  carForm: FormGroup;

  constructor(private carService: CarService, private fb: FormBuilder) {
    this.carForm = fb.group({
      name: [null, Validators.required],
      model: [null, Validators.required],
      brand: [null, Validators.required],
      description: [null, Validators.required],
      price: [null, Validators.compose([Validators.required, Validators.pattern('[0-9]+')])]
    });
   }

  ngOnInit() {
  }

  addCar(car){
    console.log(car);
    this.carService.addCar(car).subscribe(res => console.log(res));

    //TODO: Redirection
  }

}
