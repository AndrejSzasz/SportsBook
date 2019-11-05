import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';

import { AuthService } from './auth.service';
import { SbPersistentStorageService } from './sb-persistent-storage.service';

const LOGIN_DATA = {
  username: 'NAME',
  password: 'PASS'
};
const API_ENDPOINT = '//sportsbook-api.azurewebsites.net/api/login';
const TOKEN = 'TOKEN';
const mockError = new ErrorEvent('Network error', {
  message: 'some error message',
});
const sbPersistentStorageStubService: Partial<SbPersistentStorageService> = {
  retrieve: () => { },
  save: () => { },
};

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthService,
        { provide: SbPersistentStorageService, useValue: sbPersistentStorageStubService },
      ]
    });
    service = TestBed.get(AuthService);
    const persistentSaveSpy = spyOn(TestBed.get(SbPersistentStorageService), 'save');
    persistentSaveSpy.calls.reset();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('login() method', () => {

    let httpMock: HttpTestingController;
    let httpResponse: string | null;
    let httpError: HttpErrorResponse | null;

    beforeEach(() => {
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
      const persistentSaveSpy = TestBed.get(SbPersistentStorageService).save;
      const token_key = 'token';

      expect(mockRequest.cancelled).toBeFalsy();
      expect(mockRequest.request.responseType).toEqual('text');

      mockRequest.flush(TOKEN);
      expect(httpResponse).toBe(TOKEN, 'there should be proper response');
      expect(httpError).toBeNull('should NOT return an error');
      expect(service.token).toBe(TOKEN, '(property)');
      expect(persistentSaveSpy).toHaveBeenCalledWith(token_key, TOKEN, true); // save to sessionStorage
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

    it('should return false if no access token', () => {
      service.token = '';
      expect(service.isAuthenticated()).toBeFalsy();
    });

    it('should return set token from persistent storage if no token yet', () => {
      service.token = '';
      const retrieveSpy = spyOn(TestBed.get(SbPersistentStorageService), 'retrieve');
      retrieveSpy.withArgs('token', true).and.returnValue('SESSION_TOKEN');
      retrieveSpy.withArgs('token', false).and.returnValue('LOCAL_TOKEN');
      retrieveSpy.withArgs('token').and.returnValue('LOCAL_TOKEN2');
      expect(service.isAuthenticated()).toBeTruthy();
      expect(service.token).toEqual('SESSION_TOKEN');
    });

    it('should return true if there is an access token', () => {
      service.token = TOKEN;
      expect(service.isAuthenticated()).toBeTruthy();
    });

  });

  it('logout() method should clear token (from persistent storage as well)', () => {
    service.token = TOKEN;
    const persistentSaveSpy = TestBed.get(SbPersistentStorageService).save;
    const token_key = 'token';

    service.logout();

    expect(service.token).toBeFalsy();
    expect(persistentSaveSpy).toHaveBeenCalledWith(token_key, '', true); // save to sessionStorage
  });

});
