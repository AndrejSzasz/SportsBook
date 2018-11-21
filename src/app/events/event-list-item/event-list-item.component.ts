import { Component, OnInit, Input } from '@angular/core';

import { SportsEvent } from '../event.service';

@Component({
  selector: 'sb-event-list-item',
  templateUrl: './event-list-item.component.html',
  styleUrls: ['./event-list-item.component.scss']
})
export class EventListItemComponent implements OnInit {

  @Input() item: SportsEvent;

  constructor() { }

  ngOnInit() {
  }

}
