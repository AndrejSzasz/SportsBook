import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { formModel } from '../login-form/form-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public token: string;

  constructor(private http: HttpClient) { }

  login(loginData: formModel) {
    this.http.post(environment.API_URL + environment.LOGIN_SUFFIX, loginData).subscribe(
      (value) => { this.token = value.toString(); },
      (error) => {
        if (error.error) {
          window.alert(error.error);
        }
      }
    );
  }

  public isAuthenticated() {
    return !!this.token;
  }
}
