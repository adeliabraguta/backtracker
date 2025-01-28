import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationConfigService } from '../../../core/config/application-config.service';
import { Observable } from 'rxjs';
import { IProject } from '../projects-management.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsManagementService {
  private readonly http = inject(HttpClient);
  private readonly applicationConfigService = inject(ApplicationConfigService);

  private readonly url = this.applicationConfigService.getEndpointFor('api/projects');

  query(): Observable<IProject[]> {
    return this.http.get<IProject[]>(this.url);
  }

  delete(param: number | null): Observable<{}> {
    return this.http.delete(`${this.url}/${param}`);
  }

  update({ param, body }: { param: number | null; body: IProject }): Observable<{}> {
    return this.http.put(`${this.url}/${param}`, body);
  }

  find(param: number | null): Observable<{}> {
    return this.http.get(`${this.url}/${param}`);
  }

  create(body: IProject): Observable<{}> {
    return this.http.post<IProject>(this.url, body);
  }
}
