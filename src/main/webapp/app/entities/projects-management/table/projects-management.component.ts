import { Component, inject, signal, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import SharedModule from '../../../shared/shared.module';
import { IProject } from '../projects-management.model';
import { ProjectsManagementService } from '../service/projects-management.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'jhi-project-management',
  imports: [RouterModule, FaIconComponent, SharedModule],
  templateUrl: './projects-management.component.html',
})
export default class ProjectsManagementComponent implements OnInit {
  projects = signal<IProject[] | null>(null);
  projectService = inject(ProjectsManagementService);

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.query().subscribe({
      next: res => {
        this.projects.set(res);
      },
      error(err) {
        throw err;
      },
    });
  }

  deleteProjects(id: number | null): void {
    this.projectService.delete(id).subscribe({
      next: () => {
        this.loadProjects();
      },
      error(err) {
        throw err;
      },
    });
  }
}
