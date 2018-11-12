import { TestBed } from '@angular/core/testing';

import { PivotService } from './pivot.service';

describe('PivotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PivotService = TestBed.get(PivotService);
    expect(service).toBeTruthy();
  });
});
