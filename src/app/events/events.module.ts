import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { ListEventsComponent } from './list-events/list-events.component';

@NgModule({
  declarations: [
    ListEventsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
})
export class EventsModule { }
