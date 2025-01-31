import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EntitiesService } from '../../service/entities.service';
import SharedModule from '../../../shared/shared.module';
import { IProject } from '../../projects-management/projects-management.model';
import { IUser } from '../../../admin/user-management/user-management.model';
import { ILabel } from '../../labels-management/labels-management.model';

@Component({
  selector: 'jhi-update',
  imports: [FormsModule, ReactiveFormsModule, SharedModule],
  templateUrl: './ticket-management-update.component.html',
  styleUrl: './ticket-management-update.component.scss',
})
export default class TicketManagementUpdateComponent implements OnInit {
  editForm = new FormGroup({
    id: new FormControl(null),
    title: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    dueDate: new FormControl(null, Validators.required),
    done: new FormControl(false, Validators.required),
    project: new FormControl(null, Validators.required),
    assignedTo: new FormControl(null, Validators.required),
    labels: new FormControl(null, Validators.required),
  });

  projects = signal<IProject[] | null>(null);
  users = signal<IUser[] | null>(null);
  labels = signal<ILabel[] | null>(null);

  private readonly route = inject(ActivatedRoute);
  private readonly ticketId = this.route.snapshot.paramMap.get('id');

  private readonly entitiesService = inject(EntitiesService);

  compareById(obj1: { id: number } | null, obj2: { id: number } | null): boolean {
    return obj1?.id === obj2?.id;
  }

  ngOnInit(): void {
    this.entitiesService.query('projects').subscribe(res => this.projects.set(res as IProject[]));
    this.entitiesService.query('admin/users').subscribe(res => this.users.set(res as IUser[]));
    this.entitiesService.query('labels').subscribe(res => this.labels.set(res as ILabel[]));

    if (this.ticketId) {
      this.entitiesService.find('tickets', +this.ticketId).subscribe(res => {
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
    const ticket = this.editForm.getRawValue();
    if (this.ticketId) {
      this.entitiesService.update('tickets', { param: ticket.id, body: ticket }).subscribe(() => this.previousState());
    } else {
      this.entitiesService.create('tickets', ticket).subscribe(() => this.previousState());
    }
  }
}
