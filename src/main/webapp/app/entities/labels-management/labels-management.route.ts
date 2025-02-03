import { Routes } from '@angular/router';

const labelsManagementRoute: Routes = [
  {
    path: '',
    loadComponent: () => import('./table/labels-management.component'),
    data: {
      breadcrumb: 'Label',
    },
  },
  {
    path: 'update/:id',
    loadComponent: () => import('./update/labels-management-update.component'),
    data: {
      breadcrumb: 'Update Label',
    },
  },
  {
    path: 'new',
    loadComponent: () => import('./update/labels-management-update.component'),
    data: {
      breadcrumb: 'New Label',
    },
  },
  {
    path: 'detail/:id',
    loadComponent: () => import('./detail/labels-management-detail.component'),
    data: {
      breadcrumb: 'Label Detail',
    },
  },
];

export default labelsManagementRoute;
