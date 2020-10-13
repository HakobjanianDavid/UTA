import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  getValue() {
      return 'some-value';
  }
  
  getData(n) {
    return 5*n;
  }
}
