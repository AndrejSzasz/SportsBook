import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';

import { SbHttpService } from './sb-http.service';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

const AuthStubService = {
  token: 'access-token',
  login: function () { },
  isAuthenticated: function () { }
};

interface Test {
  id: string;
  name: string;
}
const stubData: Array<Test> = [
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
  let service: SbHttpService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: AuthService, useValue: AuthStubService }
      ]
    });
    service = TestBed.get(SbHttpService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get() method', () => {
    it('should call the api URL ', () => {
      let response: Array<Test>;
      let httpError: HttpErrorResponse;

      service.get<Array<Test>>(GET_ENDPOINT).subscribe(
        (value) => {
          response = value;
        },
        (error) => {
          httpError = error;
        }
      );
      const mockRequest = httpMock.expectOne(environment.API_URL + GET_ENDPOINT);
      expect(mockRequest.cancelled).toBeFalsy();
      expect(mockRequest.request.responseType).toEqual('json');
      expect(mockRequest.request.headers.keys()).toContain('Authorization');
      expect(mockRequest.request.headers.get('Authorization')).toBe('Bearer ' + AuthStubService.token);

      mockRequest.flush(stubData);
      expect(response).toEqual(stubData);
      expect(httpError).toBeUndefined('should NOT return an error');
    });
  });
});
