import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { EventService, SportsEvent } from '../event.service';
import { AddEventComponent } from '../add-event/add-event.component';

@Component({
  selector: 'sb-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.scss']
})
export class ListEventsComponent implements OnInit {

  showAdd: boolean;

  constructor(
    public service: EventService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.service.init();
    this.showAdd = false;
  }

  trackById(index: number, event: SportsEvent): number {
    return event.id;
  }

  onAdd() {
    // this.showAdd = true;
    this.openDialog();
  }

  onDelete(id) {
  }

  private openDialog(): void {
    const dialogRef = this.dialog.open(AddEventComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed with result', result);
    },
    (error) => {
      console.log('Dialog errored with', error);
    },
    () => {
      console.log('dialog completed');
    }
    );
  }
}
