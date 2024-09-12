import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../../services/car.service';
import { Car } from '../../types/cars.interface';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { finalize, map } from 'rxjs/operators';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.css',
})
export class CarDetailsComponent implements OnInit {
  car$: Observable<Car> = new Observable<Car>();
  isLoading = signal<boolean>(true);

  constructor(private route: ActivatedRoute, private carService: CarService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const carId = params.get('id');
      if (carId) {
        this.getCarDetails(carId);
      }
    });
  }

  getCarDetails(id: string): void {
    this.car$ = this.carService.getCarById(id).pipe(
      finalize(() => this.isLoading.set(false))
    );
  }
}
