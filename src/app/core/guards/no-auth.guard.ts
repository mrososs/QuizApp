import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { StorageService } from '../services/storage.service';

export const noAuthGuard: CanActivateFn = () => {
  const storage = inject(StorageService);
  const router = inject(Router);
  const token = storage.getAccessToken();
  const role = storage.getUserRole();

  if (token) {
    if (role === 'Instructor') {
      router.navigate(['/dashboard/instructor']);
    } else if (role === 'Student') {
      router.navigate(['/dashboard/learner']);
    } else {
      router.navigate(['/dashboard']);
    }
  }

  return true;
};
