/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DragService } from './drag.service';

describe('Service: Drag', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DragService]
    });
  });

  it('should ...', inject([DragService], (service: DragService) => {
    expect(service).toBeTruthy();
  }));
});
