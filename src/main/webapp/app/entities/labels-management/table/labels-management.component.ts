import { Component, inject, signal, OnInit } from '@angular/core';
import { EntitiesService } from '../../service/entities.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectManagementDeleteComponent } from '../../projects-management/delete/project-management-delete.component';
import { ILabel } from '../labels-management.model';
import { RouterModule } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import SharedModule from '../../../shared/shared.module';
import LabelsManagementDeleteComponent from '../delete/labels-management-delete.component';

@Component({
  selector: 'jhi-table',
  imports: [RouterModule, FaIconComponent, SharedModule],
  templateUrl: './labels-management.component.html',
})
export default class LabelsManagementComponent implements OnInit {
  labels = signal<ILabel[] | null>(null);
  entitiesService = inject(EntitiesService);
  private readonly modalService = inject(NgbModal);

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.entitiesService.query('labels').subscribe(res => this.labels.set(res as ILabel[]));
  }

  deleteProjects(label: ILabel): void {
    const modalRef = this.modalService.open(LabelsManagementDeleteComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.label = label;
    modalRef.closed.subscribe(reason => {
      if (reason === 'deleted') {
        this.loadProjects();
      }
    });
  }
}
