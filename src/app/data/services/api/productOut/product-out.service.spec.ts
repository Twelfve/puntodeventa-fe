import { TestBed } from '@angular/core/testing';

import { ProductOutService } from './product-out.service';

describe('ProductOutService', () => {
  let service: ProductOutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductOutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
