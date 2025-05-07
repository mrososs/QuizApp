import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

export const learnerGuard: CanActivateFn = (route, state) => {
   const storage = inject(StorageService);
    const router = inject(Router);
    const role = storage.getUserRole();
  
    if (role === 'Student') {
      return true;
    }
    router.navigate(['/login']);
    return false;
};
