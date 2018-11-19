import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { SbHttpService } from 'src/app/services/sb-http.service';
import { environment } from 'src/environments/environment';

interface Stadium {
  id: string;
  name: string;
}

@Component({
  selector: 'sb-list-stadiums',
  templateUrl: './list-stadiums.component.html',
  styleUrls: ['./list-stadiums.component.scss']
})
export class ListStadiumsComponent implements OnInit {

  showAdd: boolean;

  stadiums$: Observable<Array<Stadium>>;

  constructor(private http: SbHttpService) { }

  ngOnInit() {
    this.stadiums$ = this.listStadiums();
    this.showAdd = false;
  }

  listStadiums() {
    return this.http.get<Array<Stadium>>(environment.STADIUMS_SUFFIX);
  }

  onAdd() {
    this.showAdd = true;
  }
}
