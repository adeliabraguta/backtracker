import { Component, inject, signal, OnInit } from '@angular/core';
import { ITicket, Ticket } from '../ticket-management-model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import SharedModule from '../../../shared/shared.module';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TicketManagementDeleteComponent } from '../delete/ticket-management-delete.component';
import { SortByDirective, SortDirective, SortService, SortState, sortStateSignal } from '../../../shared/sort';
import { TicketManagementService } from '../service/ticket-management.service';
import { ITEMS_PER_PAGE } from '../../../config/pagination.constants';
import { combineLatest } from 'rxjs';
import { SORT } from '../../../config/navigation.constants';
import { ItemCountComponent } from '../../../shared/pagination';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'jhi-ticket-management.json',
  imports: [RouterModule, SharedModule, SortDirective, SortByDirective, ItemCountComponent],
  templateUrl: './ticket-management.component.html',
  styleUrl: './ticket-management.component.scss',
})
export default class TicketManagementComponent implements OnInit {
  tickets = signal<Ticket[] | null>(null);
  itemsPerPage = ITEMS_PER_PAGE;
  page!: number;
  sortState = sortStateSignal({});
  totalItems = signal(0);
  private readonly ticketsService = inject(TicketManagementService);
  private readonly modalService = inject(NgbModal);
  private readonly sortService = inject(SortService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);

  ngOnInit(): void {
    combineLatest([this.activatedRoute.data, this.activatedRoute.queryParamMap]).subscribe(([data, params]) => {
      const page = params.get('page');
      this.page = +(page ?? 1);
      this.sortState.set(this.sortService.parseSortParam(params.get(SORT) ?? data.defaultSort));
      this.loadTickets();
    });
  }

  loadTickets(): void {
    this.ticketsService
      .query({
        page: this.page - 1,
        size: this.itemsPerPage,
        sort: this.sortService.buildSortParam(this.sortState(), 'id'),
      })
      .subscribe({
        next: (res: HttpResponse<Ticket[]>) => {
          this.onSuccess(res.body as ITicket[], res.headers);
        },
      });
  }

  onSuccess(body: Ticket[], headers: HttpHeaders): void {
    this.tickets.set(body);
    this.totalItems.set(Number(headers.get('X-Total-Count')));
  }

  deleteTickets(ticket: ITicket): void {
    const modalRef = this.modalService.open(TicketManagementDeleteComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.ticket = ticket;
    modalRef.closed.subscribe(reason => {
      if (reason === 'deleted') {
        this.loadTickets();
      }
    });
  }

  transition(sortState?: SortState): void {
    this.router.navigate(['./'], {
      relativeTo: this.activatedRoute.parent,
      queryParams: {
        page: this.page,
        sort: this.sortService.buildSortParam(sortState ?? this.sortState()),
      },
    });
  }
}
