import { ComponentFixture, TestBed } from '@angular/core/testing';

import LabelsManagementComponent from './labels-management.component';

describe('LabelsManagementComponent', () => {
  let component: LabelsManagementComponent;
  let fixture: ComponentFixture<LabelsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabelsManagementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LabelsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
