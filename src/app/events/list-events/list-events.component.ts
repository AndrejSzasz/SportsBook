import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { EventService, SportsEvent } from '../event.service';
import { StadiumService, Stadium } from 'src/app/stadiums/stadium.service';
import { AddEventComponent } from '../add-event/add-event.component';

@Component({
  selector: 'sb-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.scss']
})
export class ListEventsComponent implements OnInit, OnDestroy {

  stadiums: Array<Stadium> = [];
  destroy$: Subject<void> = new Subject();

  constructor(
    public eventService: EventService,
    public stadiumService: StadiumService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.eventService.init();
    this.stadiumService.stadiums$
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (result) => {
          this.stadiums = result;
        },
        (error) => {
          if (error instanceof HttpErrorResponse) {
            this.snackBar.open(error.error, 'Dismiss');
          } else {
            throw error;
          }
        },
      );
    this.stadiumService.init();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  trackById(index: number, event: SportsEvent): number {
    return event.id;
  }

  onAdd() {
    this.openDialog();
  }

  onDelete(id) {
    this.eventService.deleteEvent(id).subscribe(
      () => {
        this.eventService.init();
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

  getStadium(id) {
    const stadium = this.stadiums.filter(item => item.id === id);
    return (stadium.length > 0) ?
      stadium[0].name :
      'Cannot find stadium!';
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
