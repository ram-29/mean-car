import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup

  constructor(private fb: FormBuilder, private carService: CarService) {
    this.loginForm = fb.group({
      userEmail: [null, Validators.compose([Validators.required, Validators.email])],
      userPassword: [null, Validators.required]
    });
   }

  ngOnInit() {
  }

}
