import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

import { EventService } from '../event.service';
import { StadiumService } from 'src/app/stadiums/stadium.service';

@Component({
  selector: 'sb-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  addForm: FormGroup;
  showAdd: boolean;
  @Output() close = new EventEmitter();

  constructor(
    public eventService: EventService,
    public stadiumService: StadiumService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    // Form setup corresponds to API model
    this.addForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      startTime: new FormControl('', [Validators.required]),
      stadiumId: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.addForm.valid) {
      this.addEvent();
    } else {
      return false;
    }
  }

  onCancel() {
    this.addForm.controls.name.setValue('');
    this.close.emit();
  }

  private addEvent() {
    this.eventService.addEvent(this.addForm.value).subscribe(
      () => {
        this.eventService.init();
        this.close.emit();
      },
      (error) => {
        if (error instanceof HttpErrorResponse) {
          this.snackBar.open(error.statusText, 'Dismiss');
        } else {
          throw error;
        }
      },
    );
  }

}
