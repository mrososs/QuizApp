import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

export const authGuard: CanActivateFn = (route, state) => {
  const storage = inject(StorageService);
  const token = storage.getAccessToken();
  const router = inject(Router);

  if (!token) {
    router.navigate(['/auth/login']);
    return false;
  }
  return true;
};
