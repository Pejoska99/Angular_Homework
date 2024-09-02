import { Routes } from '@angular/router';
import { CarsComponent } from './components/cars/cars.component';
import { ContactComponent } from './components/contact/contact.component';

import { AboutComponent } from './components/about/about.component';
// import { SingleCarComponent } from './components/single-car/single-car.component';

export const routes: Routes = [
  { path: '', component: CarsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  // {path: 'car-details/:id', component: SingleCarComponent },
  { path: '**', redirectTo: 'cars' },
];
