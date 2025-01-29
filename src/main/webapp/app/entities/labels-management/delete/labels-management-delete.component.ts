import { Component, inject } from '@angular/core';
import { EntitiesService } from '../../service/entities.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import SharedModule from '../../../shared/shared.module';
import { Label } from '../labels-management.model';

@Component({
  selector: 'jhi-delete',
  imports: [FormsModule, SharedModule],
  templateUrl: './labels-management-delete.component.html',
})
export default class LabelsManagementDeleteComponent {
  label?: Label;

  private readonly entitiesService = inject(EntitiesService);
  private readonly activeModal = inject(NgbActiveModal);

  cancel(): void {
    this.activeModal.dismiss();
  }

  delete(id: number): void {
    this.entitiesService.delete('labels', id).subscribe(() => this.activeModal.close('deleted'));
  }
}
