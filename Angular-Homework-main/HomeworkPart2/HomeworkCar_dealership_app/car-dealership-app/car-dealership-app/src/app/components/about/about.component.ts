import { Component } from '@angular/core';
import { DealershipInfoComponent } from '../dealership-info/dealership-info.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [DealershipInfoComponent, MatCardModule, MatDividerModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
