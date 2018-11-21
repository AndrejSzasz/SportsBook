import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { EventService, SportsEvent } from './event.service';
import { SbHttpService } from 'src/app/services/sb-http.service';

const TEST_DATA: Array<SportsEvent> = [{
  id: 0,
  startTime: '2018-11-20T13:38:30.834Z',
  name: 'NAME',
  stadiumId: 0
}];

const ASYNC_DELAY = 500;
const TEST_OBSERVABLE: Observable<Array<SportsEvent>> = of(
  TEST_DATA
).pipe(delay(ASYNC_DELAY));

const SbHttpStubService = {
  get: function () {
    return TEST_OBSERVABLE;
  },
};

describe('EventService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: SbHttpService, useValue: SbHttpStubService }
    ],
  }));

  it('should be created', () => {
    const service: EventService = TestBed.get(EventService);
    expect(service).toBeTruthy();
  });

  it('should return the observable from the API', () => {
    const service: EventService = TestBed.get(EventService);
    expect(service.events$ instanceof Observable).toBeTruthy();
  });

  it('should pass the data coming from the API', fakeAsync(() => {
    let result: Array<SportsEvent>;
    const service: EventService = TestBed.get(EventService);
    service.events$.subscribe(
      (value) => { result = value; }
    );
    expect(result).toBeUndefined();
    service.init(); // trigger data emission
    tick(ASYNC_DELAY);
    expect(result).toEqual(TEST_DATA);
  }));

  xit('should post data to the API', () => {
    const service: EventService = TestBed.get(EventService);
    expect(service).toBeTruthy();
  });

  xit('should be created', () => {
    const service: EventService = TestBed.get(EventService);
    expect(service).toBeTruthy();
  });
});
