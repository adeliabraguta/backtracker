import { Component, inject } from '@angular/core';
import { ProjectsManagementService } from '../service/projects-management.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Project } from '../projects-management.model';
import { FormsModule } from '@angular/forms';
import SharedModule from '../../../shared/shared.module';

@Component({
  selector: 'jhi-delete',
  imports: [FormsModule, SharedModule],
  templateUrl: './project-management-delete.component.html',
  styleUrl: './project-management-delete.component.scss',
})
export class ProjectManagementDeleteComponent {
  project?: Project;

  private readonly projectService = inject(ProjectsManagementService);
  private readonly activeModal = inject(NgbActiveModal);

  cancel(): void {
    this.activeModal.dismiss();
  }

  delete(id: number): void {
    this.projectService.delete(id).subscribe(() => this.activeModal.close('deleted'));
  }
}
