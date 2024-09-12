import { Component, ElementRef, input, output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { debounceTime, fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchTerm = input<string>('');
  updateSearchTerm = output<string>();

  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;;
  subscription: Subscription = new Subscription();

  ngAfterViewInit() {
    this.subscription = fromEvent(this.searchInput.nativeElement, 'input')
      .pipe(debounceTime(500))
      .subscribe((event: Event) => {
        const inputElement = event.target as HTMLInputElement;
        this.updateSearchTerm.emit(inputElement.value);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
