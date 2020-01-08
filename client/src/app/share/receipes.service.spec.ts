import { TestBed } from '@angular/core/testing';

import { ReceipesService } from './receipes.service';

describe('ReceipesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReceipesService = TestBed.get(ReceipesService);
    expect(service).toBeTruthy();
  });
});
