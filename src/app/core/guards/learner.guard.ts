import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StorgeService } from '../services/storage.service';

export const learnerGuard: CanActivateFn = (route, state) => {
   const storage = inject(StorgeService);
    const router = inject(Router);
    const role = storage.getUserRole();
  
    if (role === 'Learner') {
      return true;
    }
    router.navigate(['/login']);
    return false;
};
