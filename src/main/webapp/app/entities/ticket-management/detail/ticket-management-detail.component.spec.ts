import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketManagementDetailComponent } from './ticket-management-detail.component';

describe('TicketManagementDetailComponent', () => {
  let component: TicketManagementDetailComponent;
  let fixture: ComponentFixture<TicketManagementDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketManagementDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketManagementDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
