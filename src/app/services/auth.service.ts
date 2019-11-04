import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { formModel } from '../login-form/form-model';
import { environment } from 'src/environments/environment';
import { SbPersistentStorageService } from './sb-persistent-storage.service';

const token_key = 'token';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public token: string;

  constructor(
    private http: HttpClient,
    private sbPersistentStorageService: SbPersistentStorageService,
  ) { }

  login(loginData: formModel) {
    return this.http.post(
      environment.API_URL + environment.LOGIN_SUFFIX,
      loginData,
      { responseType: 'text' }).pipe(
        tap(
          (value) => {
            this.token = value;
            this.saveToken(value);
          }
        )
      );
  }

  logout() {
    this.token = '';
    this.saveToken('');
  }

  isAuthenticated() {
    if (!this.token) {
      this.token = this.sbPersistentStorageService.retrieve(token_key);
    }
    return !!this.token;
  }

  private saveToken(token: string) {
    this.sbPersistentStorageService.save(token_key, token);
  }
}
