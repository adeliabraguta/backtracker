import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelsManagementDetailComponent } from './labels-management-detail.component';

describe('LabelsManagementDetailComponent', () => {
  let component: LabelsManagementDetailComponent;
  let fixture: ComponentFixture<LabelsManagementDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabelsManagementDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelsManagementDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
