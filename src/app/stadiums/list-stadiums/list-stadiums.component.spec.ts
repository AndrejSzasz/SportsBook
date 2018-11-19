import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MaterialModule } from '../../material/material.module';

import { ListStadiumsComponent } from './list-stadiums.component';
import { StadiumService } from '../stadium.service';

const StadiumStubService = {
  observable$ : of([
    {
      id: '1',
      name: 'NAME'
    }
  ]),
  init: function () {

  },
};

@Component({ selector: 'sb-add-stadium', template: '', })
class AddStadiumStubComponent { }

describe('ListStadiumsComponent', () => {
  let component: ListStadiumsComponent;
  let fixture: ComponentFixture<ListStadiumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [
        ListStadiumsComponent,
        AddStadiumStubComponent,
      ],
      providers: [
        { provide: StadiumService, useValue: StadiumStubService }
      ],

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStadiumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
