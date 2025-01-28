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
];

export default routes;
