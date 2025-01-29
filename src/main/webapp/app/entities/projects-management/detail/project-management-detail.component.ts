import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IProject } from '../projects-management.model';
import { EntitiesService } from '../../service/entities.service';
import SharedModule from '../../../shared/shared.module';

@Component({
  selector: 'jhi-detail',
  imports: [RouterModule, SharedModule],
  templateUrl: './project-management-detail.component.html',
})
export default class ProjectManagementDetailComponent implements OnInit {
  project = signal<IProject | null>(null);
  private readonly route = inject(ActivatedRoute);
  private readonly projectId = this.route.snapshot.paramMap.get('id');
  private readonly projectsService = inject(EntitiesService);

  ngOnInit(): void {
    if (this.projectId) {
      this.projectsService.find('projects', +this.projectId).subscribe(res => this.project.set(res as IProject));
    }
  }

  previousState(): void {
    window.history.back();
  }
}
