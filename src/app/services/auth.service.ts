import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { formModel } from '../login-form/form-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public token: string;

  constructor(private http: HttpClient) { }

  login(loginData: formModel) {
    this.http.post(environment.API_URL + environment.LOGIN_SUFFIX, loginData, this.getHeaders()).subscribe(
      (value) => {this.token = value.toString(); },
      (error) => {console.log(error); }
    );
  }

  private getHeaders() {
    const headers = new HttpHeaders();
    return { headers: headers };
  }
}
