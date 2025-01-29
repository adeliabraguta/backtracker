import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelsManagementDeleteComponent } from './labels-management-delete.component';

describe('LabelsManagementDeleteComponent', () => {
  let component: LabelsManagementDeleteComponent;
  let fixture: ComponentFixture<LabelsManagementDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabelsManagementDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelsManagementDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
