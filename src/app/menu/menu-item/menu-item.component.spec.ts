import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MenuItemComponent } from './menu-item.component';

// tslint:disable-next-line:component-selector
@Component({ selector: 'mat-icon', template: '' })
class MatIconStubComponent { }

// tslint:disable-next-line:component-selector
@Component({ selector: 'mat-list-item', template: '' })
class MatListItemStubComponent { }

describe('MenuItemComponent', () => {
  let component: MenuItemComponent;
  let fixture: ComponentFixture<MenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        MenuItemComponent,
        MatIconStubComponent,
        MatListItemStubComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
