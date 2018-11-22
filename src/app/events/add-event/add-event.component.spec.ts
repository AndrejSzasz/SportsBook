import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

import { AddEventComponent } from './add-event.component';
import { EventService } from '../event.service';
import { StadiumService, Stadium } from '../../stadiums/stadium.service';

let eventResponse: number;
let stadiumResponse: Array<Stadium>;

const EventStubService = {
  init: function () { },
  addEvent: function () {
    return of(eventResponse);
  },
};

const StadiumStubService = {
  stadiums$: of(stadiumResponse),
  init: function () { },
};


describe('AddEventComponent', () => {
  let component: AddEventComponent;
  let fixture: ComponentFixture<AddEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        NoopAnimationsModule,
      ],
      declarations: [ AddEventComponent ],
      providers: [
        { provide: EventService, useValue: EventStubService },
        { provide: StadiumService, useValue: StadiumStubService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
