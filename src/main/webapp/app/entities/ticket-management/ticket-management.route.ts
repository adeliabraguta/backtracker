import { Routes } from '@angular/router';

const ticketManagementRoute: Routes = [
  {
    path: 'update/:id',
    loadComponent: () => import('./update/ticket-management-update.component'),
    data: {
      breadcrumb: 'Edit Ticket',
    },
  },
  {
    path: 'new',
    loadComponent: () => import('./update/ticket-management-update.component'),
    data: {
      breadcrumb: 'Create Ticket',
    },
  },
  {
    path: 'detail/:id',
    loadComponent: () => import('./detail/ticket-management-detail.component'),
    data: {
      breadcrumb: 'Ticket',
    },
  },
];

export default ticketManagementRoute;
