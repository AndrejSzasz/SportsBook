import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStadiumsComponent } from './list-stadiums.component';

describe('ListStadiumsComponent', () => {
  let component: ListStadiumsComponent;
  let fixture: ComponentFixture<ListStadiumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStadiumsComponent ]
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
