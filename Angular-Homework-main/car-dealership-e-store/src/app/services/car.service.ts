import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Car } from '../types/cars.interface';
import { CARS_DATA } from '../data/cars.data';
import { v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private carsSubject: BehaviorSubject<Car[]> = new BehaviorSubject<Car[]>(CARS_DATA);
  cars$ = this.carsSubject.asObservable();
  
  
  getCars(): Observable<Car[]> {
    return this.cars$;
  }

  addCar(newCar: Car) {
    const currentCars = this.carsSubject.value;
    this.carsSubject.next([...currentCars, newCar]);
  }
  createCar(
    description: string, 
    price: number,
    brand: string, 
    model: string, 
    image: string,
    
  ) {
    const newCar: Car = {
      id: uuid(),
      description,
      price,
      brand,
      model,
      images: [image],
    };

    this.addCar(newCar);
  }
  removeCar(carToRemove: Car) {
    const updatedCars = this.carsSubject.value.filter(car => car.id !== carToRemove.id);
    this.carsSubject.next(updatedCars);
  }

}
