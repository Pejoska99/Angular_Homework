import { Component, input, Input } from '@angular/core';
import { Car } from '../../types/cars.interface';
import { CommonModule } from '@angular/common';
import { CarService } from '../../services/car.service';




@Component({
  selector: 'app-single-car',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-car.component.html',
  styleUrl: './single-car.component.css'
})
export class SingleCarComponent {
  // @Input() car: Car;

  car = input.required<Car>();
  

  
 

  showDetails: boolean = false;

  constructor(private readonly carService: CarService) {}

  toggleDetails() {
      this.showDetails = !this.showDetails;
    }
  
  removeCar() {
        this.carService.removeCar(this.car());
    
  }
}
