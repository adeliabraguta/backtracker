import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EntitiesService } from '../../service/entities.service';
import SharedModule from '../../../shared/shared.module';

@Component({
  selector: 'jhi-update',
  imports: [FormsModule, ReactiveFormsModule, SharedModule],
  templateUrl: './labels-management-update.component.html',
})
export default class LabelsManagementUpdateComponent implements OnInit {
  editForm = new FormGroup({
    id: new FormControl(null),
    label: new FormControl(null, Validators.required),
  });

  private readonly route = inject(ActivatedRoute);
  private readonly labelId = this.route.snapshot.paramMap.get('id');

  private readonly projectsService = inject(EntitiesService);

  ngOnInit(): void {
    if (this.labelId) {
      this.projectsService.find('labels', +this.labelId).subscribe(res => {
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
    const label = this.editForm.getRawValue();
    if (this.labelId) {
      this.projectsService.update('labels', { param: label.id, body: label }).subscribe(() => this.previousState());
    } else {
      this.projectsService.create('labels', label).subscribe(() => this.previousState());
    }
  }
}
