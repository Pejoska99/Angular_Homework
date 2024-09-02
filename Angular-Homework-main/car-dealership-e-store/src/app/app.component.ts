import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Car } from './types/cars.interface';
import { DealershipInfoComponent } from './components/dealership-info/dealership-info.component';
import { CarsComponent } from './components/cars/cars.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateCarComponent } from './components/create-car/create-car.component';
import { CarService } from './services/car.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    NavbarComponent,
    ContactComponent,
    DealershipInfoComponent,
    CarsComponent,
    CreateCarComponent, 
  ],  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent  {
  title = 'car-dealership-e-store';
  cars: Car[] = [];

  constructor(private carService: CarService) {
    
  }

  ngOnInit() {
    this.carService.getCars().subscribe(cars => {
      this.cars = cars;
    });
  }

  addCar(newCar: Car) {
    this.carService.addCar(newCar);
  }
}

