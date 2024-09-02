import { Component, OnInit, signal } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../types/cars.interface';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../types/response.interface';
import { finalize, map, tap } from 'rxjs/operators';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatGridList, MatGridTile],
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  cars$: Observable<Car[]> = new Observable<Car[]>();
  isLoading = signal<boolean>(true);
  total = signal<number>(0);
  pageSize = signal<number>(0);
  page = signal<number>(0);

  constructor(private carService: CarService, private router: Router) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars(searchQuery: any = {}): void {
    this.cars$ = this.carService.getCars(searchQuery).pipe(
      tap((response: ApiResponse<Car[]>) => {
        console.log('API Response:', response); 
        this.total.set(response.total);
      }),
      map((response: ApiResponse<Car[]>) => {
               console.log(response); 
              return response.payload; 
                
             }),
      finalize(() => this.isLoading.set(false))
    );
  }
}


