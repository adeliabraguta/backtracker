import { TestBed } from '@angular/core/testing';

import { ProjectsManagementService } from './projects-management.service';

describe('ProjectManagementService', () => {
  let service: ProjectsManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
