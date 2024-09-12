import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { Car } from '../types/cars.interface';
import { environment } from '../environment';
import { ApiResponse } from '../types/response.interface';
import { SearchCarQuery } from '../types/search-car-query';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = `${environment.apiURL}/cars`;

  constructor(private http: HttpClient) {}

  getCars(searchQuery: SearchCarQuery = {}): Observable<ApiResponse<Car[]>> {
    
    return this.http.get<ApiResponse<Car[]>>(this.apiUrl, {
      params: {
        ...searchQuery 
      }
    }).pipe(
      catchError(error => {
        console.error( error);
        return of({payload: [], total: 0}); 
      })
    )
    
  }
  getCarById(id: string): Observable<Car> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Car>(url).pipe(
      catchError(error => {
        console.error(`Error fetching car with id=${id}`, error);
        return of(null as unknown as Car); 
      })
    );
  }
}

// getRoom(id: string): Observable<Room> {
//   return this.http.get<Room>(`${this.roomPath}/${id}`);
// }