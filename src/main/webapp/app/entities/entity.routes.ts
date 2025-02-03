import { Routes } from '@angular/router';
import { UserRouteAccessService } from '../core/auth/user-route-access.service';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./admin/authority/list/authority.component').then(m => m.AuthorityComponent),
    data: {
      authorities: ['ROLE_ADMIN'],
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'authority',
    data: { pageTitle: 'backtrackerApp.adminAuthority.home.title', breadcrumb: 'Authority' },
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
  {
    path: 'project-management',
    loadComponent: () => import('./projects-management/table/projects-management.component'),
    title: 'projectManagement.home.title',
    data: {
      breadcrumb: 'Projects',
    },
  },
  {
    path: 'project-management',
    loadChildren: () => import('./projects-management/projects-management.route'),
    title: 'projectManagement.home.title',
    data: {
      breadcrumb: 'Labels',
    },
  },
  {
    path: 'labels-management',
    loadComponent: () => import('./labels-management/table/labels-management.component'),
    title: 'labelsManagement.home.title',
    data: {
      breadcrumb: 'Labels',
    },
  },
  {
    path: 'labels-management',
    loadChildren: () => import('./labels-management/labels-management.route'),
    title: 'labelsManagement.home.title',
    data: {
      breadcrumb: 'Labels',
    },
  },
  {
    path: 'ticket-management',
    loadComponent: () => import('./ticket-management/table/ticket-management.component'),
    data: {
      breadcrumb: 'Tickets',
    },
  },
  {
    path: 'ticket-management',
    loadChildren: () => import('./ticket-management/ticket-management.route'),
    title: 'ticketManagement.home.title',
    data: {
      breadcrumb: 'Tickets',
    },
  },
];

export default routes;
