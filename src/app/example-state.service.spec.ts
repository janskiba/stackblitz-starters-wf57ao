import { TestBed } from '@angular/core/testing';

import { ExampleStateService } from './example-state.service';

describe('ExampleStateService', () => {
  let service: ExampleStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
