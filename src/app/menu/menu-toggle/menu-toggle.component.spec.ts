import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuToggleComponent } from './menu-toggle.component';

// tslint:disable-next-line:component-selector
@Component({ selector: 'mat-icon', template: '' })
class MatIconStubComponent { }

// tslint:disable-next-line:component-selector
@Component({ selector: 'mat-list-item', template: '' })
class MatListItemStubComponent { }

describe('MenuToggleComponent', () => {
  let component: MenuToggleComponent;
  let fixture: ComponentFixture<MenuToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MenuToggleComponent,
        MatIconStubComponent,
        MatListItemStubComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
