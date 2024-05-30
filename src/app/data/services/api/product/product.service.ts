import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PRODUCT_SERVICES } from '../../../constants/routes/api-product.routes';
import { GenericResponse} from '../../../interfaces/api/generic-response.interface';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IProduct } from './product.interface';
import { Product } from '../../../interfaces/api/product/product.interface';
@Injectable({
  providedIn: 'root',
})

export class ProductService {
  constructor(private http: HttpClient) {}

  /**
   * Get all serviceReports from API
   * @returns: GenericResponse: ServiceReports[]
   */
  public getProducts(): Observable<{ error: boolean; msg: string; data: any }> {
    const response: GenericResponse = { error: true, msg: '', data: null };
    console.log(2);

    return this.http.get<{ msg: string; data: any }>(API_PRODUCT_SERVICES.READ.ALL).pipe(
      map((resp) => {
        response.msg = resp.msg;
        response.error = false;
        //response.data = resp.data;
        response.data = resp;
        console.log("hodlsa", resp);

        return response;
      }),
      catchError((err) => {console.log(err); return throwError(err);})
    );
  }

  public getProduct(productId: number): Observable<{ error: boolean; msg: string; data: any }> {
    const response: GenericResponse = { error: true, msg: '', data: null };
    console.log(2);

    return this.http.get<{ msg: string; data: any }>(`${API_PRODUCT_SERVICES.READ.SINGLE}${productId}`).pipe(
      map((resp) => {
        response.msg = resp.msg;
        response.error = false;
        //response.data = resp.data;
        response.data = resp;
        console.log("hodlsa", resp);

        return response;
      }),
      catchError((err) => {console.log(err); return throwError(err);})
    );
  }

  public createProduct(product: Product): Observable<{ error: boolean; msg: string; data: Product }> {
    const response: GenericResponse = { error: true, msg: '', data: null };
    console.log(2);

    return this.http.post<{ msg: string; data: Product }>(API_PRODUCT_SERVICES.CREATE.PRODUCT, product).pipe(
      map((resp) => {
        response.msg = resp.msg;
        response.error = false;
        //response.data = resp.data;
        response.data = resp;
        console.log("hodlsa", resp);

        return response;
      }),
      catchError((err) => {console.log(err); return throwError(err);})
    );
  }

  public updateProduct(productId: number, product: Partial<Product>): Observable<{ error: boolean; msg: string; data: Partial<Product> }> {
    const response: GenericResponse = { error: true, msg: '', data: null };
    console.log(2);

    return this.http.post<{ msg: string; data: Partial<Product> }>(`${API_PRODUCT_SERVICES.UPDATE.PRODUCT}${productId}`, product).pipe(
      map((resp) => {
        response.msg = resp.msg;
        response.error = false;
        //response.data = resp.data;
        response.data = resp;
        console.log("hodlsa", resp);

        return response;
      }),
      catchError((err) => {console.log(err); return throwError(err);})
    );
  }
  // getProducts() {
  //   return this.http.get(API_PRODUCT_SERVICES.READ.ALL);  // Example API call
  // }
}
