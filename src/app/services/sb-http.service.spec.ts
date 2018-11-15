import { TestBed, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SbHttpService } from './sb-http.service';
import { AuthService } from './auth.service';

const AuthStubService = {
  token: 'access-token',
  login: function () { },
  isAuthenticated: function () { }
};

const stubData = [
  {
    id: '1',
    name: 'whatever'
  },
  {
    id: '0',
    name: 'something else'
  },
];

const GET_ENDPOINT = '/fake/get';

describe('SbHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [
      { provide: AuthService, useValue: AuthStubService }
    ]
  }));

  it('should be created', () => {
    const service: SbHttpService = TestBed.get(SbHttpService);
    expect(service).toBeTruthy();
  });

  xdescribe('get() method', () => {
    it('should call the api URL ', fakeAsync(() => {
      const service: SbHttpService = TestBed.get(SbHttpService);
      const httpMock = TestBed.get(HttpTestingController);
      service.get(GET_ENDPOINT).subscribe(
        () => {
          const calledUrl = httpMock.expectOne(GET_ENDPOINT);
          expect(calledUrl).toBe('GET_ENDPOINT');
        }
      );
    }));
  });
});
