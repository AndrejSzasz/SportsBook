import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  describe('login() method', () => {

    it('should make a HTTP call to API ');

    it('should get access token from API');

  });

  describe('isAuthenticated() method', () => {

    it('should return false if no access token');

    it('should return true if no access token');

  });

});
