import { TestBed, async, inject } from '@angular/core/testing';
import { Injectable, Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Route } from '@angular/router';

import { LoggedInGuard } from './logged-in.guard';
import { AuthService } from '../services/auth.service';

let loginStatus: Boolean;

@Injectable()
class AuthStubService {
  isAuthenticated() {
    return loginStatus;
  }
}

@Component({
  template: `Log in`
})
export class LoginComponent {
}

@Component({
  template: `Home`
})
export class HomeComponent {
}
const stubRoutes: Array<Route> = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [LoggedInGuard]
  },
  { path: 'login', component: LoginComponent },
];


describe('LoggedInGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(stubRoutes)],
      declarations: [
        HomeComponent,
        LoginComponent,
      ],
      providers: [
        LoggedInGuard,
        { provide: AuthService, useClass: AuthStubService }
      ]
    });
  });

  it('should compile OK', inject([LoggedInGuard], (guard: LoggedInGuard) => {
    expect(guard).toBeTruthy();
  }));

  xit('should return true if authenticated', inject([LoggedInGuard], (guard: LoggedInGuard) => {
    loginStatus = false;
    expect(guard).toBeTruthy();
  }));

});
