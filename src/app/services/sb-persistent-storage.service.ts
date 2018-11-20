import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SbPersistentStorageService {

  constructor() { }

  save(key: string, object: any): void {
    localStorage.setItem(key, JSON.stringify(object));
  }

  retrieve(key): any {
    return JSON.parse(localStorage.getItem(key));
  }
}
