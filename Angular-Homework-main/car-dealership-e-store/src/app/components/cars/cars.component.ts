import { Component, Input, signal } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../types/cars.interface';
import { CommonModule } from '@angular/common';
import { SingleCarComponent } from '../single-car/single-car.component';
import { Observable } from 'rxjs';
import { CarBrandFilterPipe } from '../../pipes/car-brand-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule, SingleCarComponent,CarBrandFilterPipe, FormsModule],
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent {
  // @Input() cars: Car[] = [];

  // cars: Car[] = [];
  cars$: Observable<Car[]>;
  cars = signal<Car[]>([]);
  searchBrand: string = "";
  fromPrice: number ;
  toPrice: number;
  

  constructor(private readonly carService: CarService) {}

  // ngOnInit() {
  //   this.carService.getCars().subscribe(data => {
  //     this.cars.set(data);
  //   });
  // }

  ngOnInit() {
    this.cars$ = this.carService.getCars();
    this.cars$.subscribe(data => {
      this.cars.set(data)
    });
  }
 


}
