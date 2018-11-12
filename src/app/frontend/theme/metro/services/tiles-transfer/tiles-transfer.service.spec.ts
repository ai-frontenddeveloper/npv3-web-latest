import { TestBed } from '@angular/core/testing';

import { TilesTransferService } from './tiles-transfer.service';

describe('TilesTransferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TilesTransferService = TestBed.get(TilesTransferService);
    expect(service).toBeTruthy();
  });
});
