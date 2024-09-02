import { Component, Input , input} from '@angular/core';

@Component({
  selector: 'app-dealership-info',
  standalone: true,
  imports: [],
  templateUrl: './dealership-info.component.html',
  styleUrl: './dealership-info.component.css'
})
// export class DealershipInfoComponent {
//   @Input() description: string = "";
//   @Input() founded: number = 0;
// }
export class DealershipInfoComponent {
  description = input<string>("");
  founded = input<number>(0);
}
