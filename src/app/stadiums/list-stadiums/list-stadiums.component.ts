import { Component, OnInit } from '@angular/core';

import { StadiumService, Stadium } from '../stadium.service';


@Component({
  selector: 'sb-list-stadiums',
  templateUrl: './list-stadiums.component.html',
  styleUrls: ['./list-stadiums.component.scss']
})
export class ListStadiumsComponent implements OnInit {

  showAdd: boolean;


  constructor(public service: StadiumService) { }

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

}
