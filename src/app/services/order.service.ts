import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class OrderService {
  constructor(private http: HttpClient) {}

  getSpoonacular(query: string): Observable<any> {
    return this.http.get<any>(environment.spoonacular + query);
  }
  getSpoonacularVegan(): Observable<any> {
    return this.http.get<any>(environment.spoonacularVegan);
  }
}
