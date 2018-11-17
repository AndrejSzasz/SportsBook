import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

import { AddStadiumComponent } from './add-stadium.component';
import { SbHttpService } from 'src/app/services/sb-http.service';

let response: number;

const SbHttpStubService = {
  post: function () {
    return of(response);
  },
};

describe('AddStadiumComponent', () => {
  let component: AddStadiumComponent;
  let fixture: ComponentFixture<AddStadiumComponent>;

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
        { provide: SbHttpService, useValue: SbHttpStubService },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStadiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be created', () => {
    response = 1;
    expect(component).toBeTruthy();
  });
});
