/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SignService } from './sign.service';

describe('SignService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignService]
    });
  });

  it('should ...', inject([SignService], (service: SignService) => {
    expect(service).toBeTruthy();
  }));
});
