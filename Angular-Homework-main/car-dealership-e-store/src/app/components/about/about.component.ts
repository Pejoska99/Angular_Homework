import { Component } from '@angular/core';
import { DealershipInfoComponent } from '../dealership-info/dealership-info.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [DealershipInfoComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
