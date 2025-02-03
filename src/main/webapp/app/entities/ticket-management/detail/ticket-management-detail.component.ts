import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntitiesService } from '../../service/entities.service';
import { ITicket } from '../ticket-management-model';

@Component({
  selector: 'jhi-detail',
  imports: [],
  templateUrl: './ticket-management-detail.component.html',
  styleUrl: './ticket-management-detail.component.scss',
})
export default class TicketManagementDetailComponent implements OnInit {
  ticket = signal<ITicket | null>(null);
  private readonly route = inject(ActivatedRoute);
  private readonly ticketId = this.route.snapshot.paramMap.get('id');
  private readonly projectsService = inject(EntitiesService);

  ngOnInit(): void {
    if (this.ticketId) {
      this.projectsService.find('tickets', +this.ticketId).subscribe(res => this.ticket.set(res as ITicket));
    }
  }

  previousState(): void {
    window.history.back();
  }
}
