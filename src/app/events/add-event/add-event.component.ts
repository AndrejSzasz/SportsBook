import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { EventService } from '../event.service';
import { StadiumService, Stadium } from 'src/app/stadiums/stadium.service';

@Component({
  selector: 'sb-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit, OnDestroy {

  addForm: FormGroup;
  showAdd: boolean;
  stadiums: Array<Stadium>;
  destroy$: Subject<void> = new Subject();

  constructor(
    public eventService: EventService,
    public stadiumService: StadiumService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AddEventComponent>
  ) { }

  ngOnInit() {
    // Form setup corresponds to API model
    this.addForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      startTime: new FormControl('', [Validators.required]),
      stadiumId: new FormControl('', [Validators.required]),
    });
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
    this.showAdd = false;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  onSubmit() {
    if (this.addForm.valid) {
      this.addEvent();
      return true;
    } else {
      return false;
    }
  }

  onCancel() {
    this.dialogRef.close();
  }

  private addEvent() {
    this.eventService.addEvent(this.addForm.value).subscribe(
      () => {
        this.eventService.init();
        this.dialogRef.close();
      },
      (error) => {
        if (error instanceof HttpErrorResponse) {
          this.snackBar.open(error.statusText, 'Dismiss');
        } else {
          console.log('CATCHED:', error);
          throw error;
        }
      },
    );
  }

}
