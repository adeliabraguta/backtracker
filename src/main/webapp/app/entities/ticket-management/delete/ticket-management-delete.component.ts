import { Component, inject } from '@angular/core';
import { EntitiesService } from '../../service/entities.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Ticket } from '../ticket-management-model';
import SharedModule from '../../../shared/shared.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'jhi-delete',
  imports: [FormsModule, SharedModule],
  templateUrl: './ticket-management-delete.component.html',
  styleUrl: './ticket-management-delete.component.scss',
})
export class TicketManagementDeleteComponent {
  ticket?: Ticket;

  private readonly entitiesService = inject(EntitiesService);
  private readonly activeModal = inject(NgbActiveModal);

  cancel(): void {
    this.activeModal.dismiss();
  }

  delete(id: number): void {
    this.entitiesService.delete('tickets', id).subscribe(() => this.activeModal.close('deleted'));
  }
}
