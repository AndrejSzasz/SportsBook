import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../../material/material.module';
import { of } from 'rxjs';

import { ListEventsComponent } from './list-events.component';
import { EventService, SportsEvent } from '../event.service';
import { StadiumService } from 'src/app/stadiums/stadium.service';


const EventStubService = {
  events$ : of([
    {
      id: 0,
      startTime: '2018-11-20T13:38:30.834Z',
      name: 'EVENT',
      stadiumId: 0
    }
  ]),
  init: function () {
  },
};

const StadiumStubService = {
  stadiums$ : of([
    {
      id: 0,
      name: 'STADIUM',
    }
  ]),
  init: function () {
  },
};

@Component({ selector: 'sb-add-event', template: '', })
class AddEventStubComponent { }

@Component({ selector: 'sb-event-list-item', template: '', })
class EventListItemStubComponent {
  @Input() item: SportsEvent;
}

describe('ListEventsComponent', () => {
  let component: ListEventsComponent;
  let fixture: ComponentFixture<ListEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [
        ListEventsComponent,
        AddEventStubComponent,
        EventListItemStubComponent,
       ],
       providers: [
        { provide: EventService, useValue: EventStubService },
        { provide: StadiumService, useValue: StadiumStubService }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
