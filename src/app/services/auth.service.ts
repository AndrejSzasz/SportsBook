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
      (value) => { this.token = value.toString(); },
      (error) => {
        console.log(error);
        // tslint:disable-next-line:max-line-length
        this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEiLCJuYmYiOjE1NDIyNjI0NjEsImV4cCI6MTU0Mjg2NzI2MSwiaWF0IjoxNTQyMjYyNDYxfQ.AWMvhC1xeG5kEhPWKiOKwU5Fhtvd5LyiMzIt5rMDtJE';
      }
    );
  }

  public isAuthenticated() {
    return !!this.token;
  }

  private getHeaders() {
    const headers = new HttpHeaders();
    return { headers: headers };
  }
}
