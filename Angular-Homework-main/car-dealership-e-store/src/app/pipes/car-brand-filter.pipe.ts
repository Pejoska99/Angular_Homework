import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../types/cars.interface';

@Pipe({
  name: 'carBrandFilter',
  standalone: true
})
export class CarBrandFilterPipe implements PipeTransform {

  transform(cars: Car[], searchBrand: string,fromPrice: number , toPrice: number):Car[] {
    if (!cars ) {
      return cars;
    }
    let filteredCars = cars;

   if (searchBrand) {
      filteredCars = filteredCars.filter(car =>
        car.brand.toLowerCase().includes(searchBrand.toLowerCase())
      );
    }

    if (fromPrice) {
      filteredCars = filteredCars.filter(car => car.price >= fromPrice);
    }

    if (toPrice) {
      filteredCars = filteredCars.filter(car => car.price <= toPrice);
    }

    return filteredCars;
  }
}

   

