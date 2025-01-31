import { inject, Injectable } from '@angular/core';
import { ApplicationConfigService } from '../../../core/config/application-config.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Pagination } from '../../../core/request/request.model';
import { Observable } from 'rxjs';
import { Ticket } from '../ticket-management-model';
import { createRequestOption } from '../../../core/request/request-util';

@Injectable({
  providedIn: 'root',
})
export class TicketManagementService {
  private readonly applicationConfigService = inject(ApplicationConfigService);
  private readonly baseUrl = this.applicationConfigService.getEndpointFor('api/tickets');
  private readonly http = inject(HttpClient);

  query(params?: Pagination): Observable<HttpResponse<Ticket[]>> {
    const reqParams = createRequestOption(params);
    return this.http.get<Ticket[]>(this.baseUrl, { params: reqParams, observe: 'response' });
  }
}
