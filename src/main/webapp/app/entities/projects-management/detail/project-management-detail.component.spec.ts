import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagementDetailComponent } from './project-management-detail.component';

describe('ProjectManagementDetailComponent', () => {
  let component: ProjectManagementDetailComponent;
  let fixture: ComponentFixture<ProjectManagementDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectManagementDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectManagementDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
