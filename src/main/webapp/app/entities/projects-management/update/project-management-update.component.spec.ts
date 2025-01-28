import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagementUpdateComponent } from './project-management-update.component';

describe('ProjectManagementUpdateComponent', () => {
  let component: ProjectManagementUpdateComponent;
  let fixture: ComponentFixture<ProjectManagementUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectManagementUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectManagementUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
