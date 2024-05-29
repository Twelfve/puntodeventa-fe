import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PRODUCT_SERVICES } from '../../../constants/routes/api-product.routes';
import { GenericResponse} from '../../../interfaces/api/generic-response.interface';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IProduct } from './product.interface';
@Injectable({
  providedIn: 'root',
})

export class ProductService {
  constructor(private http: HttpClient) {}

  /**
   * Get all serviceReports from API
   * @returns: GenericResponse: ServiceReports[]
   */
  public getProducts(): Observable<{ error: boolean; msg: string; data: IProduct[] }> {
    const response: GenericResponse = { error: true, msg: '', data: null };
    console.log(2);

    return this.http.get<{ msg: string; data: IProduct[] }>(API_PRODUCT_SERVICES.READ.ALL).pipe(
      map((resp) => {
        response.msg = resp.msg;
        response.error = false;
        //response.data = resp.data;
        response.data = resp.data as IProduct[];
        return response;
      }),
      catchError((err) => {console.log(err); return throwError(err);})
    );
  }
  // getProducts() {
  //   return this.http.get(API_PRODUCT_SERVICES.READ.ALL);  // Example API call
  // }
}
