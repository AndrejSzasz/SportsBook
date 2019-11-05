import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SbPersistentStorageService {

  constructor() { }

  save(key: string, object: any, useSessionStorage = false): void {
    (useSessionStorage ? sessionStorage : localStorage)
    .setItem(key, JSON.stringify(object));
  }

  retrieve(key: string, useSessionStorage = false): any {
    const item = (useSessionStorage ? sessionStorage : localStorage).getItem(key);
    return item ? JSON.parse(item) : null;
  }
}
