import { TestBed } from '@angular/core/testing';

import { TradedetailService } from './tradedetail.service';

describe('TradedetailService', () => {
  let service: TradedetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradedetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
