import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { API_STORES_SERVICES } from '../../../constants/routes/api-stores.routes';
import { GenericResponse } from '../../../interfaces/api/generic-response.interface';

@Injectable({
  providedIn: 'root',
})
export class StoresService {
  constructor(private http: HttpClient) {}

  public getStores(): Observable<{ error: boolean; msg: string; data: any }> {
    const response: GenericResponse = { error: true, msg: '', data: null };

    return this.http
      .get<{ msg: string; data: any }>(API_STORES_SERVICES.READ.ALL)
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
