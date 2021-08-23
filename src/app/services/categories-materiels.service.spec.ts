import { TestBed } from '@angular/core/testing';

import { CategoriesMaterielsService } from './categories-materiels.service';

describe('CategoriesMaterielsService', () => {
  let service: CategoriesMaterielsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesMaterielsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
