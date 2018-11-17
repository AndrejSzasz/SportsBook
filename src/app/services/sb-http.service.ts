import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SbHttpService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  // <T> overload for HttpClient methods always parses JSON,
  // need to add more overloads if the response is something else
  get<T>(apiEndpoint: string): Observable<T> {
    return this.http.get<T>(
      environment.API_URL + apiEndpoint,
      {
        headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.token}`)
      }
    );
  }

  post<T>(apiEndpoint: string, payload): Observable<T> {
    return this.http.post<T>(
      environment.API_URL + apiEndpoint,
      payload,
      {
        headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.token}`)
      }
    );
  }

}
