import { TestBed } from '@angular/core/testing';

import { LabelsManagementServiceService } from './labels-management-service.service';

describe('LabelsManagementServiceService', () => {
  let service: LabelsManagementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabelsManagementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
