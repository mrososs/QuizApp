import { CanActivateFn, Router } from '@angular/router';
import { StorgeService } from '../services/storge.service';
import { inject } from '@angular/core';

export const instructorGuard: CanActivateFn = (route, state) => {
  const storage = inject(StorgeService);
  const router = inject(Router);
  const role = storage.getUserRole();

  if (role === 'Instructor') {
    return true;
  }
  router.navigate(['/login']);
  return false;
};
