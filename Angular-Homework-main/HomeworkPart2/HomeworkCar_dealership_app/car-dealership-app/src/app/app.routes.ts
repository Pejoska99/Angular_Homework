import { Routes } from '@angular/router';
import { CarsComponent } from './components/cars/cars.component';
import { ContactComponent } from './components/contact/contact.component';

import { AboutComponent } from './components/about/about.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';


export const routes: Routes = [
  { path: '', component: CarsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
 
  { 
    path: 'car/:id',
    loadComponent: () => 
      import('./components/car-details/car-details.component').then(c => c.CarDetailsComponent)
  },
  
  { path: 'car/:id', component: CarDetailsComponent }, 
  { path: '**', redirectTo: 'cars' },
];


