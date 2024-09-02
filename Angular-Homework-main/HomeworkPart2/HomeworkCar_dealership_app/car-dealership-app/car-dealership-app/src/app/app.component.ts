import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Car } from './types/cars.interface';
import { DealershipInfoComponent } from './components/dealership-info/dealership-info.component';
import { CarsComponent } from './components/cars/cars.component';
import { ContactComponent } from './components/contact/contact.component';
import { CarService } from './services/car.service';
import { Observable } from 'rxjs';
import { ApiResponse } from './types/response.interface';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  
}
