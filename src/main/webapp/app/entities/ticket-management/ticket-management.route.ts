import { Routes } from '@angular/router';

const ticketManagementRoute: Routes = [
  {
    path: '',
    loadComponent: () => import('./table/ticket-management.component'),
  },
  {
    path: 'update/:id',
    loadComponent: () => import('./update/ticket-management-update.component'),
  },
  {
    path: 'new',
    loadComponent: () => import('./update/ticket-management-update.component'),
  },
  {
    path: 'detail/:id',
    loadComponent: () => import('./detail/ticket-management-detail.component'),
  },
];

export default ticketManagementRoute;
