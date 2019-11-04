import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuComponent } from './side-menu.component';
import { SbPersistentStorageService } from 'src/app/services/sb-persistent-storage.service';

@Component({ selector: 'sb-menu-item', template: '' })
class MenuItemStubComponent { }

// tslint:disable-next-line:component-selector
@Component({ selector: 'mat-nav-list', template: '' })
class MatNavListStubComponent { }

describe('SideMenuComponent', () => {
  let component: SideMenuComponent;
  let fixture: ComponentFixture<SideMenuComponent>;
  const sbPersistentStorageStubService: Partial<SbPersistentStorageService> = {
    retrieve: () => {}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SideMenuComponent,
        MenuItemStubComponent,
        MatNavListStubComponent,
       ],
      providers: [
        { provide: SbPersistentStorageService, useValue: sbPersistentStorageStubService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
