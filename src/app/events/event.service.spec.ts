import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { of, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { EventService, SportsEvent } from './event.service';
import { SbHttpService } from 'src/app/services/sb-http.service';
import { environment } from 'src/environments/environment';

const GET_DATA: Array<SportsEvent> = [{
  id: 0,
  startTime: '2018-11-20T13:38:30.834Z',
  name: 'NAME',
  stadiumId: 0
}];
const TEST_OBSERVABLE: Observable<Array<SportsEvent>> = getObservable(GET_DATA);
const POST_DATA: SportsEvent = {
  id: 123,
  startTime: '2018-11-20T13:38:30.834Z',
  name: 'NAME',
  stadiumId: 0
};
const POST_REPLY = 1;
const TEST_OBSERVABLE_POST: Observable<number> = getObservable(POST_REPLY);
const DELETE_DATA = 1;
const DELETE_REPLY = 1;
const TEST_OBSERVABLE_DELETE: Observable<number> = getObservable(DELETE_REPLY);

const ASYNC_DELAY = 5000;
function getObservable<T>(data: T): Observable<T> {
  return of(
    data
  ).pipe(debounceTime(5000)); // workaround for ReferenceError: Cannot access 'ASYNC_DELAY' before initialization
}

const SbHttpStubService = {
  get: function () {
    return TEST_OBSERVABLE;
  },
  post: function (_api_endpoint, _data) {
    return TEST_OBSERVABLE_POST;
  },
  delete: function () {
    return TEST_OBSERVABLE_DELETE;
  },
};

describe('EventService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: SbHttpService, useValue: SbHttpStubService }
    ],
  }));

  it('should be created', () => {
    const service: EventService = TestBed.inject(EventService);
    expect(service).toBeTruthy();
  });

  it('should return the observable from the API', () => {
    const service: EventService = TestBed.inject(EventService);
    expect(service.events$ instanceof Observable).toBeTruthy();
  });

  it('should pass the data coming from the API', fakeAsync(() => {
    let result: Array<SportsEvent> | undefined;
    const service: EventService = TestBed.inject(EventService);
    service.events$.subscribe(
      (value) => { result = value; }
    );
    expect(result).toBeUndefined();
    service.init(); // trigger data emission
    tick(ASYNC_DELAY);
    expect(result).toEqual(GET_DATA);
  }));

  describe('addEvent method', () => {

    let service: EventService;

    beforeEach(() => {
      // GIVEN
      service = TestBed.inject(EventService);
    });

    it('should post data to the API', () => {
      const postSpy = spyOn(TestBed.inject(SbHttpService), 'post');
      // WHEN
      service.addEvent(POST_DATA);
      // THEN
      expect(postSpy).toHaveBeenCalledWith(environment.EVENTS_SUFFIX, POST_DATA);
    });

    it('should return the result of the post', fakeAsync(() => {
      let result: number | undefined;
      // WHEN
      service.addEvent(POST_DATA).subscribe(
        (value) => { result = value; }
      );

      // THEN
      tick(ASYNC_DELAY);
      expect(result).toEqual(POST_REPLY);
    }));

  });

  describe('deleteEvent method', () => {

    let service: EventService;

    beforeEach(() => {
      // GIVEN
      service = TestBed.inject(EventService);
    });

    it('should post data to the API', () => {
      const deleteSpy = spyOn(TestBed.inject(SbHttpService), 'delete');
      // WHEN
      service.deleteEvent(DELETE_DATA);
      // THEN
      expect(deleteSpy).toHaveBeenCalledWith(environment.EVENTS_SUFFIX + '/' + DELETE_DATA);
    });

    it('should return the result of the delete', fakeAsync(() => {
      let result: number | undefined;
      // WHEN
      service.deleteEvent(DELETE_DATA).subscribe(
        (value) => { result = value; }
      );

      // THEN
      tick(ASYNC_DELAY);
      expect(result).toEqual(DELETE_REPLY);
    }));

  });
});
