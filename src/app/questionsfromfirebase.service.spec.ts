import { TestBed, inject } from '@angular/core/testing';

import { QuestionsfromfirebaseService } from './questionsfromfirebase.service';

describe('QuestionsfromfirebaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionsfromfirebaseService]
    });
  });

  it('should ...', inject([QuestionsfromfirebaseService], (service: QuestionsfromfirebaseService) => {
    expect(service).toBeTruthy();
  }));
});
