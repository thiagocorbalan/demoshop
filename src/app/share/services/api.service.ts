import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {

  constructor(private http: HttpClient) {}

  public get(url: string, options?: HttpRequest<any>): Observable<T[]> {
    return this.http.get<T[]>(url).pipe(take(1));
  }

  public post(url: string, body: any, options?: HttpRequest<any>): Observable<T> {
    return this.http.post<T>(url, body).pipe(take(1));
  }

  public put(url: string, body: any, options?: HttpRequest<any>): Observable<T> {
    return this.http.put<T>(url, body).pipe(take(1));
  }

  public delete(url: string, options?: HttpRequest<any>): Observable<T> {
    return this.http.delete<T>(url).pipe(take(1));
  }

  public patch(url: string, body: any, options?: HttpRequest<any>): Observable<T> {
    return this.http.patch<T>(url, body).pipe(take(1));
  }
}
