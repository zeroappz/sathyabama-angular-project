import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // getItems()
  getItems(url: string): Observable<any> {
    // cors origin
    const httpOptions = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
      }
    }

    const result = this.http.get<any>(url, httpOptions).pipe(
      catchError(this.handleError('getItems', [])),
    );
    return result;
  }

  // Post Items
  postItems(url: string, data: any, token?: any): Observable<any> {
    // cors origin
    const httpOptions = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
      }
    }
    const result = this.http.post<any>(url, data, httpOptions).pipe(
      catchError(this.handleError('postItems', [])),
    )
    return result;
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error.message);
      return of(result as T);
    };
  }
}
