import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

import { AddStadiumComponent } from './add-stadium.component';
import { StadiumService } from '../stadium.service';
import { DebugElement } from '@angular/core';

let response: number;

const StadiumStubService = {
  init: function () { },
  addStadium: function () {
    return of(response);
  },
};
const TEST_DATA = 'Stadium';

fdescribe('AddStadiumComponent', () => {
  let component: AddStadiumComponent;
  let fixture: ComponentFixture<AddStadiumComponent>;
  let service: StadiumService;
  let formElement, inputElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        NoopAnimationsModule,
      ],
      declarations: [AddStadiumComponent],
      providers: [
        { provide: StadiumService, useValue: StadiumStubService },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStadiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.get(StadiumService);
    formElement = fixture.debugElement.query(By.css('form'));
    inputElement = fixture.debugElement.query(By.css('input'));
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should call .addStadium on non-empty form (happy path)', () => {
    const addStadiumMethod: jasmine.Spy = spyOn(service, 'addStadium').and.callThrough();
    expect(addStadiumMethod).not.toHaveBeenCalled();

    fillForm(TEST_DATA);
    submitForm();

    expect(addStadiumMethod).toHaveBeenCalledWith({ name: TEST_DATA });
  });

  it('should not call empty form (invalid form)', () => {
    const addStadiumMethod: jasmine.Spy = spyOn(service, 'addStadium');

    expect(addStadiumMethod).not.toHaveBeenCalled();
    submitForm();
    expect(addStadiumMethod).not.toHaveBeenCalled();
  });

  it('should trigger service init (list reload) on successful submit', () => {
    const initMethod: jasmine.Spy = spyOn(service, 'init');
    response = 1;

    expect(initMethod).not.toHaveBeenCalled();

    fillForm(TEST_DATA);
    submitForm();

    expect(initMethod).toHaveBeenCalled();
  });

  function fillForm(value) {
    inputElement.nativeElement.value = value;
    // does not work: inputElement.triggerEventHandler('input', null);
    inputElement.nativeElement.dispatchEvent(new Event('input'));
    expect(component.addForm.controls.name.value).toEqual(value);
  }

  function submitForm() {
    formElement.triggerEventHandler('submit', null);
  }

});

