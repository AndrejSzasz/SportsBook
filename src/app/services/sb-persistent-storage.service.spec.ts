import { TestBed } from '@angular/core/testing';

import { SbPersistentStorageService } from './sb-persistent-storage.service';

describe('SbPersistentStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SbPersistentStorageService = TestBed.inject(SbPersistentStorageService);
    expect(service).toBeTruthy();
  });
});
