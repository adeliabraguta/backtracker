import { Routes } from '@angular/router';

const projectsManagementRoute: Routes = [
  {
    path: '',
    loadComponent: () => import('./table/projects-management.component'),
  },
  {
    path: 'update/:id',
    loadComponent: () => import('./update/project-management-update.component'),
  },
  {
    path: 'new',
    loadComponent: () => import('./update/project-management-update.component'),
  },
  {
    path: 'detail/:id',
    loadComponent: () => import('./detail/project-management-detail.component'),
  },
];

export default projectsManagementRoute;
