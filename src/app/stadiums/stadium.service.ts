import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { SbHttpService } from '../services/sb-http.service';
import { environment } from 'src/environments/environment';

interface Stadium {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class StadiumService {

  stadiums$: Observable<Array<Stadium>>;
  trigger$: Subject<Boolean> = new Subject();

  constructor(private http: SbHttpService) {
    console.log('service constr');
    this.stadiums$ = this.trigger$.pipe(
      switchMap(
        () => this.http.get<Array<Stadium>>(environment.STADIUMS_SUFFIX)
      )
    );
  }

  init() {
    console.log('service init');
    this.trigger$.next(true);
  }

  addStadium(stadium): Observable<number> {
    console.log('service addstadium');
    return this.http.post<number>(environment.STADIUMS_SUFFIX, stadium);
  }
}
