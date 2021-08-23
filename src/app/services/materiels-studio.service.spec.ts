import { TestBed } from '@angular/core/testing';

import { MaterielsStudioService } from './materiels-studio.service';

describe('MaterielsStudioService', () => {
  let service: MaterielsStudioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterielsStudioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
