import { TestBed } from '@angular/core/testing';

import { ProductIncomeService } from './product-income.service';

describe('ProductIncomeService', () => {
  let service: ProductIncomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductIncomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
