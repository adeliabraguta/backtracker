import { Component, inject, signal, OnInit } from '@angular/core';
import { IProject } from '../../projects-management/projects-management.model';
import { ActivatedRoute } from '@angular/router';
import { EntitiesService } from '../../service/entities.service';
import { ILabel } from '../labels-management.model';
import SharedModule from '../../../shared/shared.module';

@Component({
  selector: 'jhi-detail',
  imports: [SharedModule],
  templateUrl: './labels-management-detail.component.html',
})
export default class LabelsManagementDetailComponent implements OnInit {
  label = signal<ILabel | null>(null);
  private readonly route = inject(ActivatedRoute);
  private readonly projectId = this.route.snapshot.paramMap.get('id');
  private readonly entitiesService = inject(EntitiesService);

  ngOnInit(): void {
    if (this.projectId) {
      this.entitiesService.find('labels', +this.projectId).subscribe(res => this.label.set(res as ILabel));
    }
  }

  previousState(): void {
    window.history.back();
  }
}
