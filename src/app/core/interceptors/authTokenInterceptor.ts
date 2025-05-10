// src/app/core/interceptors/auth-token.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { StorageService } from '../services/storage.service';

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const storage = inject(StorageService);
  const token = storage.getAccessToken();
  const RefToken = storage.getRefreshToken();


  // Skip requests to /auth endpoints
  if (req.url.includes('/auth')) {
    return next(req);
  }

  // Apply token only to /instructor or /learner APIs
  // if ((req.url.includes('/instructor') || req.url.includes('/learner')) && token ) {
  //   const authReq = req.clone({
  //     setHeaders: {
  //       Authorization: `Bearer ${token}`
  //     }
  //   });
  //   return next(authReq);
  // }
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });
  return next(authReq);

  // return next(req);
};
