import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { SbHttpService } from '../services/sb-http.service';
import { environment } from 'src/environments/environment';

export interface Stadium {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class StadiumService {

  stadiums$: Observable<Array<Stadium>>;
  trigger$: ReplaySubject<Array<Stadium>> = new ReplaySubject(1);

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
    this.trigger$.next();
  }

  addStadium(stadium): Observable<number> {
    console.log('service addstadium');
    return this.http.post<number>(environment.STADIUMS_SUFFIX, stadium);
  }

  deleteStadium(id): Observable<number> {
    console.log('service deletestadium');
    return this.http.delete<number>(`${environment.STADIUMS_SUFFIX}/${id}`);
  }
}
