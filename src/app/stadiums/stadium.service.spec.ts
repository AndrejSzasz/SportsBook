import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { StadiumService } from './stadium.service';
import { SbHttpService } from 'src/app/services/sb-http.service';

const SbHttpStubService = {
  get: function () {
    return of([
      {
        id: '1',
        name: 'NAME'
      }
    ]);
  },
};

describe('StadiumService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: SbHttpService, useValue: SbHttpStubService }
    ],
  }));

  it('should be created', () => {
    const service: StadiumService = TestBed.inject(StadiumService);
    expect(service).toBeTruthy();
  });
});
