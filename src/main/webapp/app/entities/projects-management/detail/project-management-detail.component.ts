import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IProject } from '../projects-management.model';
import { ProjectsManagementService } from '../service/projects-management.service';

@Component({
  selector: 'jhi-detail',
  imports: [RouterModule],
  templateUrl: './project-management-detail.component.html',
})
export default class ProjectManagementDetailComponent implements OnInit {
  project = signal<IProject | null>(null);
  private readonly route = inject(ActivatedRoute);
  private readonly projectId = this.route.snapshot.paramMap.get('id');
  private readonly projectsService = inject(ProjectsManagementService);

  ngOnInit(): void {
    if (this.projectId) {
      this.projectsService.find(+this.projectId).subscribe(res => this.project.set(res as IProject));
    }
  }

  previousState(): void {
    window.history.back();
  }
}
