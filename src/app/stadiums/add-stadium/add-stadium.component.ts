import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  constructor(private service: StadiumService) { }

  ngOnInit() {
    console.log('addStadium init!');
    // Form setup corresponds to API model
    this.addForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }

  addStadium() {
    console.log('addStadium called!');
    this.service.addStadium(this.addForm.value).subscribe(
      (response) => {
        console.log(response);
        this.service.init();
        this.close.emit();
      },
      (error) => {
        console.log(error);
      },
    );
  }

  onSubmit() {
    console.log('onSubmit');
    if (this.addForm.valid) {
      this.addStadium();
    } else {
      return false;
    }
  }

  onCancel() {
    console.log('cancel pressed');
    this.addForm.controls.name.setValue('');
    this.close.emit();
  }

}
