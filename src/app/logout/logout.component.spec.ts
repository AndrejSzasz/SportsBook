import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';

import { LogoutComponent } from './logout.component';
import { AuthService } from '../services/auth.service';

const TOKEN = 'TOKEN';
const AuthStubService = {
  token: TOKEN,
  logout: function () {}
};

const routes: Routes = [
  { path: 'blah', component: LogoutComponent },
  { path: 'login', component: LogoutComponent },
];


describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
      ],
      declarations: [ LogoutComponent ],
      providers: [
        { provide: AuthService, useValue: AuthStubService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should log out', () => {
    const authServiceLogoutSpy = spyOn(TestBed.get(AuthService), 'logout');

    expect(authServiceLogoutSpy).not.toHaveBeenCalled();
    fixture.detectChanges();
    expect(authServiceLogoutSpy).toHaveBeenCalled();
  });

  it('should navigate to home page', () => {
    // test is implementation dependent, component could call navigateByUrl as well
    const routerNavigateSpy = spyOn(TestBed.get(Router), 'navigate');

    expect(routerNavigateSpy).not.toHaveBeenCalled();
    fixture.detectChanges();
    expect(routerNavigateSpy).toHaveBeenCalledWith([ '' ]);
  });

});
