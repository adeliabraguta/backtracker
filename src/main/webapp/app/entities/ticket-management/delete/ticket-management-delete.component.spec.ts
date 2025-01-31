import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketManagementDeleteComponent } from './ticket-management-delete.component';

describe('TicketManagementDeleteComponent', () => {
  let component: TicketManagementDeleteComponent;
  let fixture: ComponentFixture<TicketManagementDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketManagementDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketManagementDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
