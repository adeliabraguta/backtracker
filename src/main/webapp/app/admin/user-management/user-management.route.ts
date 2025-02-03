import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, Routes } from '@angular/router';
import { of } from 'rxjs';

import { IUser } from './user-management.model';
import { UserManagementService } from './service/user-management.service';

export const userManagementResolve: ResolveFn<IUser | null> = (route: ActivatedRouteSnapshot) => {
  const login = route.paramMap.get('login');
  if (login) {
    return inject(UserManagementService).find(login);
  }
  return of(null);
};

const userManagementRoute: Routes = [
  {
    path: ':login/view',
    loadComponent: () => import('./detail/user-management-detail.component'),
    resolve: {
      user: userManagementResolve,
    },
    data: {
      breadcrumb: 'User Details',
    },
  },
  {
    path: 'new',
    loadComponent: () => import('./update/user-management-update.component'),
    resolve: {
      user: userManagementResolve,
    },
    data: {
      breadcrumb: 'Create User',
    },
  },
  {
    path: ':login/edit',
    loadComponent: () => import('./update/user-management-update.component'),
    resolve: {
      user: userManagementResolve,
    },
    data: {
      breadcrumb: 'Edit User',
    },
  },
];

export default userManagementRoute;
