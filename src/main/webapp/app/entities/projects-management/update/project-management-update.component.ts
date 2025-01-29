import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EntitiesService } from '../../service/entities.service';
import { ActivatedRoute } from '@angular/router';
import SharedModule from '../../../shared/shared.module';

@Component({
  selector: 'jhi-update',
  imports: [FormsModule, ReactiveFormsModule, SharedModule],
  templateUrl: './project-management-update.component.html',
})
export default class ProjectManagementUpdateComponent implements OnInit {
  editForm = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null, Validators.required),
  });

  private readonly route = inject(ActivatedRoute);
  private readonly projectId = this.route.snapshot.paramMap.get('id');

  private readonly projectsService = inject(EntitiesService);

  ngOnInit(): void {
    if (this.projectId) {
      this.projectsService.find('projects', +this.projectId).subscribe(res => {
        this.editForm.reset(res);
      });
    } else {
      this.editForm.reset();
    }
  }

  previousState(): void {
    window.history.back();
  }

  handleForm(): void {
    const project = this.editForm.getRawValue();
    if (this.projectId) {
      this.projectsService.update('projects', { param: project.id, body: project }).subscribe(() => this.previousState());
    } else {
      this.projectsService.create('projects', project).subscribe(() => this.previousState());
    }
  }
}
