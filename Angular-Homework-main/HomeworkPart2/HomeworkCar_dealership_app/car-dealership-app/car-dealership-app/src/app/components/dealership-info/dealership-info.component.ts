import { Component, Input , input} from '@angular/core';
import { MatCardMdImage, MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-dealership-info',
  standalone: true,
  imports: [MatCardModule,MatDividerModule, MatListModule],
  templateUrl: './dealership-info.component.html',
  styleUrl: './dealership-info.component.css'
})

export class DealershipInfoComponent {
  description = input<string>("");
  founded = input<number>(0);
}
