import { TestBed } from '@angular/core/testing';

import { TestService } from './test.service';

describe('TestService', () => {
  let service: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should be equal 5', () => {
    expect(service).toBeTruthy();
    let a = service.getData(1);
    expect(a).toEqual(5);
  });

  it('should be equal 25', () => {
    expect(service).toBeTruthy();
    let a = service.getData(5);
    expect(a).toEqual(25);
  });

  it('should be NaN', () => {
    expect(service).toBeTruthy();
    let a = service.getData('5fd');
    expect(a).toBeNaN();
  });

  it('should be rigth value', () => {
    expect(service).toBeTruthy();
    let a = service.getValue();
    expect(a).toBe('some-value');
  });
});
