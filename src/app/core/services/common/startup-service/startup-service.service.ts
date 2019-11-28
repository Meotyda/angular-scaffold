import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StartupServiceService {

  constructor() { }

  initializeApp() {
    return new Promise((resolve) => {
      return resolve()
    });
  }
}
