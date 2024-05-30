import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { GenericResponse } from '../../../interfaces/api/generic-response.interface';
import { API_PRODUCT_INCOME_SERVICES } from '../../../constants/routes/api-productIncome.routes';

@Injectable({
  providedIn: 'root',
})
export class ProductIncomeService {
  constructor(private http: HttpClient) {}

  public putProductIncome(product: any): Observable<{
    error: boolean;
    msg: string;
    data: any;
  }> {
    const response: GenericResponse = { error: true, msg: '', data: null };

    return this.http
      .put<{ msg: string; data: any }>(
        API_PRODUCT_INCOME_SERVICES.PUT.ALL,
        product
      )
      .pipe(
        map((resp) => {
          response.msg = '';
          response.error = false;
          response.data = resp;

          return response;
        }),
        catchError((err) => {
          console.log(err);
          return throwError(err);
        })
      );
  }
}
