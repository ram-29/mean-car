import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CarService {

  constructor(
    private http: Http
  ) { }

  getCars(){
    return this.http.get('http://localhost:1337/api/cars').map(res => res.json());
  }

  addCar(car){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:1337/api/car/add', car, {headers: headers}).map(res => res.json());
  }

  deleteCar(id){
    return this.http.delete('http://localhost:1337/api/car/'+ id).map(res => res.json());
  }

}
