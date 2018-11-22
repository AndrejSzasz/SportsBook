import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { ListEventsComponent } from './list-events/list-events.component';
import { EventListItemComponent } from './event-list-item/event-list-item.component';
import { AddEventComponent } from './add-event/add-event.component';

@NgModule({
  declarations: [
    ListEventsComponent,
    EventListItemComponent,
    AddEventComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
})
export class EventsModule { }
