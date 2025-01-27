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
    // title: 'projects.title',
  },
];

export default routes;
