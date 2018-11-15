import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Injectable } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { LoginFormComponent } from './login-form.component';

@Injectable()
class AuthStubService {
  token: string;
  login() {}
  isAuthenticated() {}
}

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
      RouterTestingModule
    ],
      providers: [
        { provide: AuthService, useClass: AuthStubService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
