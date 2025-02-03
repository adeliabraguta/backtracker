import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { BreadcrumbService } from './service/breadcrumb.service';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jhi-breadcrumb',
  imports: [RouterModule, CommonModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs = signal<{ label: string; url: string }[]>([]);
  private readonly breadcrumbService = inject(BreadcrumbService);

  constructor(private router: Router) {
    router.events.subscribe(val => {
      this.breadcrumbs.set(this.breadcrumbService.breadcrumbs);
    });
  }
  ngOnInit(): void {
    this.breadcrumbs.set(this.breadcrumbService.breadcrumbs);
  }
}
