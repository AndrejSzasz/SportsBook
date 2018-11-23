import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { formModel } from '../login-form/form-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public token: string;

  constructor(private http: HttpClient) { }

  login(loginData: formModel) {
    return this.http.post(
      environment.API_URL + environment.LOGIN_SUFFIX,
      loginData,
      { responseType: 'text'} ).pipe(
        tap(
          (value) => {
            this.token = value;
          }
        )
      );
  }

  logout() {
    this.token = '';
  }

  isAuthenticated() {
    return !!this.token;
  }

}
