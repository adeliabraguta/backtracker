import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authority',
    data: { pageTitle: 'backtrackerApp.adminAuthority.home.title' },
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
  {
    path: 'project-management',
    loadChildren: () => import('./projects-management/projects-management.route'),
    title: 'projectManagement.home.title',
  },
  {
    path: 'labels-management',
    loadChildren: () => import('./labels-management/labels-management.route'),
    title: 'labelsManagement.home.title',
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
