import { Component, Injectable } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLayoutComponent } from './menu-layout.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({ selector: 'sb-side-menu', template: '' })
class SideMenuStubComponent { }

@Injectable()
class AuthStubService {
  isAuthenticated() { }
}

describe('MenuLayoutComponent', () => {
  let component: MenuLayoutComponent;
  let fixture: ComponentFixture<MenuLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MenuLayoutComponent,
        SideMenuStubComponent,
      ],
      providers: [
        { provide: AuthService, useClass: AuthStubService }
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
