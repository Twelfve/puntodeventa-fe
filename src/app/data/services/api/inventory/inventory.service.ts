import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericResponse } from '../../../interfaces/api/generic-response.interface';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IInventory } from './inventory.interface';
import { Product } from '../../../interfaces/api/product/product.interface';
import { API_INVENTORY_SERVICES } from '../../../constants/routes/api-inventory.routes';
@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  constructor(private http: HttpClient) {}

  /**
   * Get all serviceReports from API
   * @returns: GenericResponse: ServiceReports[]
   */
  public getInventory(): Observable<{ error: boolean; msg: string; data: any }> {
    const response: GenericResponse = { error: true, msg: '', data: null };
    console.log(2);

    return this.http
      .get<{ msg: string; data: any }>(API_INVENTORY_SERVICES.READ.ALL)
      .pipe(
        map((resp) => {
          // response.msg = resp.msg;
          response.error = false;
          //response.data = resp.data;
          response.data = resp;

          return response;
        }),
        catchError((err) => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  public deleteProductInventory(productInventoryId: number[]): Observable<{ error: boolean; msg: string; data: any }> {
    const response: GenericResponse = { error: true, msg: '', data: null };
    console.log(2);

    return this.http
      .put<{ msg: string; data: any }>(API_INVENTORY_SERVICES.DELETE.PRODUCT, productInventoryId)
      .pipe(
        map((resp) => {
          // response.msg = resp.msg;
          response.error = false;
          //response.data = resp.data;
          response.data = resp;

          return response;
        }),
        catchError((err) => {
          console.log(err);
          return throwError(err);
        })
      );
  }


  // getProducts() {
  //   return this.http.get(API_PRODUCT_SERVICES.READ.ALL);  // Example API call
  // }
}
