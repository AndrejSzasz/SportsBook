import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from '@angular/common/http/testing';

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
const returnedData: Array<Test> = [
  {
    id: '1',
    name: 'whatever'
  },
  {
    id: '0',
    name: 'something else'
  },
];

const sentData: Array<Test> = [
  {
    id: '2',
    name: 'whenever'
  },
  {
    id: '-1',
    name: 'wherever'
  },
];
const returnedStatus = 1;

const GET_ENDPOINT = '/fake/get';
const POST_ENDPOINT = '/fake/post';
const DELETE_ENDPOINT = '/fake/delete';

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
    it('should call the api URL with authorization header', () => {
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

      mockRequest.flush(returnedData);
      expect(response).toEqual(returnedData);
      expect(httpError).toBeUndefined('should NOT return an error');
    });
  });

  describe('post() method', () => {
    let response: Array<Test>;
    let httpError: HttpErrorResponse;
    let mockRequest: TestRequest;

    beforeEach(() => {
      service.post<Array<Test>>(POST_ENDPOINT, sentData).subscribe(
        (value) => {
          response = value;
        },
        (error) => {
          httpError = error;
        }
      );
      mockRequest = httpMock.expectOne(environment.API_URL + POST_ENDPOINT);
    });

    afterEach(() => {
      httpMock.verify();
      expect(httpError).toBeUndefined('should NOT return an error');
    });

    it('should call the api URL and return JSON', () => {
      expect(mockRequest.cancelled).toBeFalsy();
      expect(mockRequest.request.responseType).toEqual('json');
    });

    it('should send an authorization header', () => {

      expect(mockRequest.request.headers.keys()).toContain('Authorization');
      expect(mockRequest.request.headers.get('Authorization')).toBe('Bearer ' + AuthStubService.token);
    });

    it('should send correct data', () => {
      expect(mockRequest.request.body).toEqual(sentData);
    });

    it('should get correct data', () => {
      mockRequest.flush(returnedData);
      expect(response).toEqual(returnedData);
    });
  });

  describe('delete() method', () => {
    let response: number;
    let httpError: HttpErrorResponse;
    let mockRequest: TestRequest;

    beforeEach(() => {
      service.delete<number>(DELETE_ENDPOINT).subscribe(
        (value) => {
          response = value;
        },
        (error) => {
          httpError = error;
        }
      );
      mockRequest = httpMock.expectOne(environment.API_URL + DELETE_ENDPOINT);
    });

    afterEach(() => {
      httpMock.verify();
      expect(httpError).toBeUndefined('should NOT return an error');
    });

    it('should call the api URL and return JSON', () => {
      expect(mockRequest.cancelled).toBeFalsy();
      expect(mockRequest.request.responseType).toEqual('json');
    });

    it('should send an authorization header', () => {

      expect(mockRequest.request.headers.keys()).toContain('Authorization');
      expect(mockRequest.request.headers.get('Authorization')).toBe('Bearer ' + AuthStubService.token);
    });

    it('should get correct data', () => {
      mockRequest.flush(returnedStatus);
      expect(response).toEqual(returnedStatus);
    });
  });

});
