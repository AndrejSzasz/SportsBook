import { Component, OnInit } from '@angular/core';

import { EventService, SportsEvent } from '../event.service';

@Component({
  selector: 'sb-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.scss']
})
export class ListEventsComponent implements OnInit {

  showAdd: boolean;

  constructor(
    public service: EventService,
  ) { }

  ngOnInit() {
    this.service.init();
    this.showAdd = false;
  }

  trackById(index: number, event: SportsEvent): number {
    return event.id;
  }

  onAdd() {
    this.showAdd = true;
  }

  onDelete(id) {
  }
}
