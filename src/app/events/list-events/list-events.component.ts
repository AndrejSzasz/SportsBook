import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog, MatSnackBar } from '@angular/material';

import { EventService, SportsEvent } from '../event.service';
import { AddEventComponent } from '../add-event/add-event.component';

@Component({
  selector: 'sb-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.scss']
})
export class ListEventsComponent implements OnInit {

  constructor(
    public service: EventService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.service.init();
  }

  trackById(index: number, event: SportsEvent): number {
    return event.id;
  }

  onAdd() {
    this.openDialog();
  }

  onDelete(id) {
    this.service.deleteEvent(id).subscribe(
      () => {
        this.service.init();
      },
      (error) => {
        if (error instanceof HttpErrorResponse) {
          this.snackBar.open(error.error, 'Dismiss');
        } else {
          throw error;
        }
      },
    );
  }

  private openDialog(): void {
    const dialogRef = this.dialog.open(AddEventComponent, {
    });

    dialogRef.afterClosed().subscribe(
      (result) => {
        console.log('The dialog was closed with result', result);
      },
      (error) => {
        console.log('Dialog errored with', error);
      },
      () => {
        console.log('Dialog completed');
      }
    );
  }
}
