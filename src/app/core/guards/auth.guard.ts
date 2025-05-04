import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StorgeService } from '../services/storge.service';

export const authGuard: CanActivateFn = (route, state) => {
  const storage = inject(StorgeService);
  const token = storage.getAccessToken();
  const router = inject(Router);

  if (!token) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
