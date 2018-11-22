import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';

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
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-US' },
  ],
  entryComponents: [
    AddEventComponent
  ]
})
export class EventsModule { }
