import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CarService } from '../../services/car.service';
import { Observable } from 'rxjs';
import { Car } from '../../types/cars.interface';
import { CommonModule } from '@angular/common';
import { SingleCarComponent } from '../single-car/single-car.component';
import { CarBrandFilterPipe } from '../../pipes/car-brand-filter.pipe';


@Component({
  selector: 'app-create-car',
  standalone: true,
  imports: [FormsModule, CommonModule, SingleCarComponent, CarBrandFilterPipe],
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent {
  description: string = '';
  price: number = 0;
  brand: string = '';
  model: string = '';
  image: string = '';
  cars: Car[] = [];
  
  

  constructor(private carService: CarService) {}

  ngOnInit() { 
    this.carService.getCars().subscribe(data => {
      console.log('Received cars data:', data);
      this.cars = data; 
   
    });
  }

  // clearInputs(){
  //   this.description = '';
  //   this.price = 0;
  //   this.brand = '';
  //   this.model = '';
  //   this.image = '';
   
  // }

  // CreateCar() {
  //   const newCar: Car = {
  //     // id: Math.random().toString(36).substring(2, 9),
  //     id: uuid(),
  //     description: this.description,
  //     price: this.price,
  //     brand: this.brand,
  //     model: this.model,
  //     images: [this.image]
  //   };

  //   this.carService.addCar(newCar);
  //   this.clearInputs();
  // }
  submitCarForm(formReference: NgForm) {
    console.log('Form submitted:', formReference);
    if (formReference.valid) {
      const formValues = formReference.form.value;
      console.log('Form values:', formValues);


      this.carService.createCar(
        formValues.description,
        formValues.price,
        formValues.brand,
        formValues.model,
        formValues.image
      );
      // this.clearInputs();
      formReference.reset();

      this.carService.getCars().subscribe(data => {
        console.log('Updated cars data:', data);
        this.cars = data;
      });
  }
  
  
}
    
  
 
}
