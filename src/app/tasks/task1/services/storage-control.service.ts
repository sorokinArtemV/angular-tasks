import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageControlService {

  saveToLocalStorage(color: string) {
    localStorage.setItem('color', color);
  }

  cleanLocalStorage() {
    localStorage.removeItem('color');
  }
}
