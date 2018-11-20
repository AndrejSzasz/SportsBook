import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListItemComponent } from './event-list-item.component';

const TEST_DATA = {
  id: 0,
  startTime: '2018-11-20T13:38:30.834Z',
  name: 'NAME',
  stadiumId: 0
};

describe('EventListItemComponent', () => {
  let component: EventListItemComponent;
  let fixture: ComponentFixture<EventListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListItemComponent);
    component = fixture.componentInstance;
    component.item = TEST_DATA; // we assume Angular's bindings are well-tested
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
