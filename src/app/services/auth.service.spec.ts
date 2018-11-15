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
const mockError = new ErrorEvent('Network error', {
  message: 'some error message',
});

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

    beforeEach(() => {
      service = TestBed.get(AuthService);
      httpMock = TestBed.get(HttpTestingController);

      httpResponse = null;
      httpError = null;

      service.login(LOGIN_DATA).subscribe(
        (response) => {
          httpResponse = response;
        },
        (error) => {
          httpError = error;
        }
      );
    });

    afterEach(() => {
      httpMock.verify();
    });

    it('should make successful HTTP call to the API', () => {
      const mockRequest = httpMock.expectOne(API_ENDPOINT);

      expect(mockRequest.cancelled).toBeFalsy();
      expect(mockRequest.request.responseType).toEqual('text');

      mockRequest.flush(TOKEN);
      expect(httpResponse).toBe(TOKEN, 'there should be proper response');
      expect(httpError).toBeNull('should NOT return an error');
      expect(service.token).toBe(TOKEN, '(property)');
    });

    it('should NOT get a token when HTTP call fails', () => {
      const mockRequest = httpMock.expectOne(API_ENDPOINT);

      expect(mockRequest.cancelled).toBeFalsy();
      expect(mockRequest.request.responseType).toEqual('text');

      mockRequest.error(mockError);
      expect(httpResponse).toBeNull('there should be no response');
      expect(httpError).toBeTruthy('should return an error');
      expect(service.token).toBeUndefined('(property)');
    });
  });


  describe('isAuthenticated() method', () => {

    it('should return false if no access token');

    it('should return true if no access token');

  });

});
