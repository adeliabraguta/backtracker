import { Routes } from '@angular/router';
/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */

const routes: Routes = [
  {
    path: 'user-management',
    loadComponent: () => import('./user-management/list/user-management.component'),
    data: {
      defaultSort: 'id,asc',
      breadcrumb: 'Users',
    },
  },
  {
    path: 'user-management',
    loadChildren: () => import('./user-management/user-management.route'),
    title: 'userManagement.home.title',
    data: {
      breadcrumb: 'Users',
    },
  },
  {
    path: 'docs',
    loadComponent: () => import('./docs/docs.component'),
    title: 'global.menu.admin.apidocs',
  },
  {
    path: 'configuration',
    loadComponent: () => import('./configuration/configuration.component'),
    title: 'configuration.title',
  },
  {
    path: 'health',
    loadComponent: () => import('./health/health.component'),
    title: 'health.title',
  },
  {
    path: 'logs',
    loadComponent: () => import('./logs/logs.component'),
    title: 'logs.title',
  },
  {
    path: 'metrics',
    loadComponent: () => import('./metrics/metrics.component'),
    title: 'metrics.title',
  },
  /* jhipster-needle-add-admin-route - JHipster will add admin routes here */
];

export default routes;
