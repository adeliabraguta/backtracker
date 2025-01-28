import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagementDeleteComponent } from './project-management-delete.component';

describe('ProjectManagementDeleteComponent', () => {
  let component: ProjectManagementDeleteComponent;
  let fixture: ComponentFixture<ProjectManagementDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectManagementDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectManagementDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
