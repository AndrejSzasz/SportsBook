import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

import { StadiumService } from '../stadium.service';

@Component({
  selector: 'sb-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.scss']
})
export class AddStadiumComponent implements OnInit {

  addForm: FormGroup;
  showAdd: boolean;
  @Output() close = new EventEmitter();

  constructor(
    private service: StadiumService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    // Form setup corresponds to API model
    this.addForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.addForm.valid) {
      this.addStadium();
    } else {
      return false;
    }
  }

  onCancel() {
    this.addForm.controls.name.setValue('');
    this.close.emit();
  }

  private addStadium() {
    this.service.addStadium(this.addForm.value).subscribe(
      () => {
        this.service.init();
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
