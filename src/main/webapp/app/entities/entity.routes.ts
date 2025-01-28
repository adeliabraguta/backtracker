import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authority',
    data: { pageTitle: 'backtrackerApp.adminAuthority.home.title' },
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
  {
    path: 'projects',
    loadComponent: () => import('./projects-management/table/projects-management.component'),
  },
  {
    path: 'update/:id',
    loadComponent: () => import('./projects-management/update/project-management-update.component'),
  },
  {
    path: 'new',
    loadComponent: () => import('./projects-management/update/project-management-update.component'),
  },
  {
    path: 'detail/:id',
    loadComponent: () => import('./projects-management/detail/project-management-detail.component'),
  },
];

export default routes;
