import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Order } from '../shared/order';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class SalesDataService {
  baseUrl = 'http://localhost:5000/api/order/';
  constructor(private _http: HttpClient) {}

  getOrders(pageIndex: number, pageSize: number): Observable<Order[]> {
    return this._http.get<Order[]>(this.baseUrl + pageIndex + '/' + pageSize);
  }
}
