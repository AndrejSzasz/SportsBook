import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { SbHttpService } from '../services/sb-http.service';
import { environment } from 'src/environments/environment';

export interface SportsEvent {
  id: number;
  startTime: string; // FIXME convert to datetime format "2018-11-20T13:38:30.834Z";
  name: string;
  stadiumId: number;
}

@Injectable({
  providedIn: 'root'
})
export class EventService {

  events$: Observable<Array<SportsEvent>>;
  trigger$: ReplaySubject<Array<SportsEvent>> = new ReplaySubject(1);

  constructor(private http: SbHttpService) {
    this.events$ = this.trigger$.pipe(
      switchMap(
        () => this.http.get<Array<SportsEvent>>(environment.EVENTS_SUFFIX)
      )
    );
  }

  init() {
    this.trigger$.next();
  }

  addStadium(stadium): Observable<number> {
    return this.http.post<number>(environment.EVENTS_SUFFIX, stadium);
  }

  deleteStadium(id): Observable<number> {
    return this.http.delete<number>(`${environment.EVENTS_SUFFIX}/${id}`);
  }
}
