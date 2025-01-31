import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProject } from '../projects-management/projects-management.model';
import { ApplicationConfigService } from '../../core/config/application-config.service';
import { ILabel } from '../labels-management/labels-management.model';
import { ITicket } from '../ticket-management/ticket-management-model';

@Injectable({
  providedIn: 'root',
})
export class EntitiesService {
  private readonly applicationConfigService = inject(ApplicationConfigService);
  private readonly baseUrl = this.applicationConfigService.getEndpointFor('api');
  private readonly http = inject(HttpClient);

  query(url: string): Observable<IProject[] | ILabel[] | ITicket[]> {
    return this.http.get<IProject[] | ILabel[] | ITicket[]>(`${this.baseUrl}/${url}`);
  }

  delete(url: string, param: number | null): Observable<{}> {
    return this.http.delete(`${this.baseUrl}/${url}/${param}`);
  }

  update(url: string, { param, body }: { param: number | null; body: IProject | ILabel | ITicket }): Observable<{}> {
    return this.http.put(`${this.baseUrl}/${url}/${param}`, body);
  }

  find(url: string, param: number | null): Observable<{}> {
    return this.http.get(`${this.baseUrl}/${url}/${param}`);
  }

  create(url: string, body: IProject | ILabel | ITicket): Observable<{}> {
    return this.http.post<IProject | ILabel | ITicket>(`${this.baseUrl}/${url}`, body);
  }
}
