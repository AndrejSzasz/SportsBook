import { TestBed } from '@angular/core/testing';

import { EventService } from './event.service';
import { SbHttpService } from 'src/app/services/sb-http.service';

const SbHttpStubService = {
  get: function () { },
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
});
