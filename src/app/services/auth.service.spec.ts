import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';

import { AuthService } from './auth.service';

const LOGIN_DATA = {
  username: 'NAME',
  password: 'PASS'
};
const API_ENDPOINT = 'http://sportsbook-api.azurewebsites.net/api/login';
const TOKEN = 'TOKEN';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [AuthService]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  describe('login() method', () => {

    let service: AuthService;
    let httpMock: HttpTestingController;
    let httpResponse: string;
    let httpError: HttpErrorResponse;

    beforeAll(() => {
      service = TestBed.get(AuthService);
      httpMock = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
      httpMock.verify();
    });

    it('should make an HTTP call to the API', () => {
      service.login(LOGIN_DATA).subscribe((response) => {
        httpResponse = response;
      },
        (error) => {
          httpError = error;
        });

      const mockRequest = httpMock.expectOne(API_ENDPOINT);

      expect(mockRequest.cancelled).toBeFalsy();
      expect(mockRequest.request.responseType).toEqual('text');

      mockRequest.flush(TOKEN);
      expect(httpResponse).toBe(TOKEN);
      expect(httpError).toBeUndefined();
    });

    it('should get access token from API');
  });


  describe('isAuthenticated() method', () => {

    it('should return false if no access token');

    it('should return true if no access token');

  });

});
