import { TestBed } from '@angular/core/testing';

import { ForumLocationsPagesService } from './forum-locations-pages.service';

describe('ForumLocationsPagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForumLocationsPagesService = TestBed.get(ForumLocationsPagesService);
    expect(service).toBeTruthy();
  });
});
