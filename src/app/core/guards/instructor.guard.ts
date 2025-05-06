import { CanActivateFn, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { inject } from '@angular/core';

export const instructorGuard: CanActivateFn = (route, state) => {
  const storage = inject(StorageService);
  const router = inject(Router);
  const role = storage.getUserRole();

  if (role === 'Instructor') {
    return true;
  }
  router.navigate(['/login']);
  return false;
};
