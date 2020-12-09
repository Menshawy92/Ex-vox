import { TestBed } from '@angular/core/testing';

import { ListPostesService } from './list-postes.service';

describe('ListPostesService', () => {
  let service: ListPostesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPostesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
