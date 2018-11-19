import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { SbHttpService } from 'src/app/services/sb-http.service';

@Component({
  selector: 'sb-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.scss']
})
export class AddStadiumComponent implements OnInit {

  addForm: FormGroup;
  showAdd: boolean;
  @Output() close = new EventEmitter();

  constructor(private http: SbHttpService) { }

  ngOnInit() {
    console.log('addStadium init!');
    // Form setup corresponds to API model
    this.addForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }

  addStadium() {
    console.log('addStadium called!');
    this.http.post<number>(environment.STADIUMS_SUFFIX, this.addForm.value).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
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
    this.close.emit(null);
  }

}
