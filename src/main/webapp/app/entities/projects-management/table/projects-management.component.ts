import { Component, inject, signal, OnInit } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import SharedModule from '../../../shared/shared.module';
import { IProject } from '../projects-management.model';
import { EntitiesService } from '../../service/entities.service';
import { RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectManagementDeleteComponent } from '../delete/project-management-delete.component';

@Component({
  selector: 'jhi-project-management',
  imports: [RouterModule, FaIconComponent, SharedModule],
  templateUrl: './projects-management.component.html',
})
export default class ProjectsManagementComponent implements OnInit {
  projects = signal<IProject[] | null>(null);
  projectService = inject(EntitiesService);
  private readonly modalService = inject(NgbModal);

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.query('projects').subscribe({
      next: res => {
        this.projects.set(res as IProject[]);
      },
      error(err) {
        throw err;
      },
    });
  }

  deleteProjects(project: IProject): void {
    const modalRef = this.modalService.open(ProjectManagementDeleteComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.project = project;
    modalRef.closed.subscribe(reason => {
      if (reason === 'deleted') {
        this.loadProjects();
      }
    });
  }
}
