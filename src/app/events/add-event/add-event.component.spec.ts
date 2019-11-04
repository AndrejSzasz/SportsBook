import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { MatDialogRef } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

import { AddEventComponent } from './add-event.component';
import { EventService } from '../event.service';
import { StadiumService, Stadium } from '../../stadiums/stadium.service';

let eventResponse: number;
let stadiumResponse: Array<Stadium> | undefined;

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
      declarations: [AddEventComponent],
      providers: [
        { provide: EventService, useValue: EventStubService },
        { provide: StadiumService, useValue: StadiumStubService },
        { provide: MatDialogRef, useValue: {} },
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

  xit('should display the stadiums in a drop-down', () => {
    // decided not to test it, as it tests angular material
    // should only test the binding between api response and on-screen real estate
    // but angular material does not have an options HTML, it just emulates the look
    const NAME = 'NAME';
    stadiumResponse = [
      {
        id: 1,
        name: NAME,
      }
    ];
    const select = fixture.debugElement.query(By.css('mat-select'));
    // trigger click on UI
    expect(select).toBeTruthy('can not find select box');
    select.nativeElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    const options = fixture.debugElement.queryAll(By.css('mat-option'));
    expect(options.length).toBe(1);
    console.log(options[0].nativeElement);
    expect(options[0].nativeElement.textContent).toBe(NAME);
  });

  xit('should close the dialog on success', () => {
    eventResponse = 1;
  });
});
