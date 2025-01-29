import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelsManagementUpdateComponent } from './labels-management-update.component';

describe('LabelsManagementUpdateComponent', () => {
  let component: LabelsManagementUpdateComponent;
  let fixture: ComponentFixture<LabelsManagementUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabelsManagementUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelsManagementUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
