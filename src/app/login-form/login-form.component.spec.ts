import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import { LoginFormComponent } from './login-form.component';

const DELAY = 5000;
const TOKEN = 'TOKEN';
const AuthStubService = {
  token: TOKEN,
  login: function () {
    return of(TOKEN).pipe(delay(DELAY));
  },
  isAuthenticated: function () {
    return true;
  }
};
const routes: Routes = [
  { path: 'blah', component: LoginFormComponent },
  { path: 'login', component: LoginFormComponent },
];

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let location: Location;
  let router: Router;
  let activatedRoute: ActivatedRoute;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes(routes),
      ],
      providers: [
        { provide: AuthService, useValue: AuthStubService },
        // { provide: Router, useValue: routerSpy },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    router.initialNavigation();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to / on successful authentication', fakeAsync(() => {
    expect(location.path()).toBe('');
    component.login();
    tick(DELAY);
    expect(location.path()).toBe('/');
  }));

  xit('should redirect to returnUrl on successful authentication', fakeAsync(() => {
    const PATH = '/login?redirectTo=%2Fblah';
    activatedRoute = TestBed.get(ActivatedRoute);
    router.navigateByUrl(PATH);
    tick();
    expect(location.path()).toBe(PATH);
    component.login();
    tick(DELAY);
    expect(location.path()).toBe('/blah');
  }));

});
