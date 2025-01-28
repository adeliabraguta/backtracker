import { Routes } from '@angular/router';

const labelsManagementRoute: Routes = [
  {
    path: '',
    loadComponent: () => import('./table/labels-management.component'),
  },
  {
    path: 'update/:id',
    loadComponent: () => import('./update/labels-management-update.component'),
  },
  {
    path: 'new',
    loadComponent: () => import('./update/labels-management-update.component'),
  },
  {
    path: 'detail/:id',
    loadComponent: () => import('./detail/labels-management-detail.component'),
  },
];

export default labelsManagementRoute;
