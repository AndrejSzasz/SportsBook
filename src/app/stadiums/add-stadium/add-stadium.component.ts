import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { SbHttpService } from 'src/app/services/sb-http.service';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'sb-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.scss']
})
export class AddStadiumComponent implements OnInit {

  addForm: FormGroup;

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

  onSubmit(event: Event) {
    if (this.addForm.valid) {
      this.addStadium();
    } else {
      return false;
    }
  }

  onCancel(event: Event) {
    console.log('cancel pressed');
    this.addForm.controls.name.setValue('');
    event.preventDefault();
  }

}
