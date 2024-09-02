import { Routes } from '@angular/router';
import { CarsComponent } from './components/cars/cars.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateCarComponent } from './components/create-car/create-car.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    {path:'',component: CarsComponent},
    {path:'about',component: AboutComponent},
    {path:'contact',component: ContactComponent},
    {path:'create-car',component: CreateCarComponent},
];
