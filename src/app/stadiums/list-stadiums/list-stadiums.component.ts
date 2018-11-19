import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';


import { StadiumService, Stadium } from '../stadium.service';


@Component({
  selector: 'sb-list-stadiums',
  templateUrl: './list-stadiums.component.html',
  styleUrls: ['./list-stadiums.component.scss']
})
export class ListStadiumsComponent implements OnInit {

  showAdd: boolean;


  constructor(
    private service: StadiumService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.service.init();
    this.showAdd = false;
  }

  trackById(index: number, stadium: Stadium): number {
    return stadium.id;
  }

  onAdd() {
    this.showAdd = true;
  }

  onDelete(id) {
    this.service.deleteStadium(id).subscribe(
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
}
