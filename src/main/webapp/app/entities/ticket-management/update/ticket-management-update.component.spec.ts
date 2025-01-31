import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketManagementUpdateComponent } from './ticket-management-update.component';

describe('TicketManagementUpdateComponent', () => {
  let component: TicketManagementUpdateComponent;
  let fixture: ComponentFixture<TicketManagementUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketManagementUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketManagementUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
