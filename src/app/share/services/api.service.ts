import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService{

  private API = environment.ApiURL;

  constructor(private http: HttpClient) {}

  public get(url: string) {

    return this.http.get<object|[object]>(this.API + url).pipe(take(1));
  }

  public post(url: string, body: object) {
    return this.http.post<object>(this.API + url, body).pipe(take(1));
  }

  public put(url: string, body: object) {
    return this.http.put<object>(this.API + url, body).pipe(take(1));
  }

  public delete(url: string) {
    return this.http.delete<object>(this.API + url).pipe(take(1));
  }

  public patch(url: string, body: object) {
    return this.http.patch<object>(this.API + url, body).pipe(take(1));
  }
}
