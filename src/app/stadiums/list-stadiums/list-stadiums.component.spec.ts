import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MaterialModule } from '../../material/material.module';

import { ListStadiumsComponent } from './list-stadiums.component';
import { SbHttpService } from 'src/app/services/sb-http.service';

const SbHttpStubService = {
  get: function () {
    return of([
      {
        id: '1',
        name: 'NAME'
      }
    ]);
  },
};

describe('ListStadiumsComponent', () => {
  let component: ListStadiumsComponent;
  let fixture: ComponentFixture<ListStadiumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ListStadiumsComponent],
      providers: [
        { provide: SbHttpService, useValue: SbHttpStubService }
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
