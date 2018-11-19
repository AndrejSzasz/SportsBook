import { Component, OnInit } from '@angular/core';

import { StadiumService } from '../stadium.service';


@Component({
  selector: 'sb-list-stadiums',
  templateUrl: './list-stadiums.component.html',
  styleUrls: ['./list-stadiums.component.scss']
})
export class ListStadiumsComponent implements OnInit {

  showAdd: boolean;


  constructor(private service: StadiumService) { }

  ngOnInit() {
    this.service.init();
    this.showAdd = false;
  }

  onAdd() {
    this.showAdd = true;
  }
}
