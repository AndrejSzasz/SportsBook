import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListEventsComponent } from './list-events/list-events.component';

@NgModule({
  declarations: [
    ListEventsComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class EventsModule { }
