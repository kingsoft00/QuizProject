import { TestBed } from '@angular/core/testing';

import { Quiz1Service } from './quiz1.service';

describe('Quiz1Service', () => {
  let service: Quiz1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Quiz1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
