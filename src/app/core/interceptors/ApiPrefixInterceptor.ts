// src/app/core/interceptors/api-prefix.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';

export const apiPrefixInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl = 'https://upskilling-egypt.com:3005/api';

  // Skip if URL is already absolute
  if (req.url.startsWith('http')) {
    return next(req);
  }

  const updatedReq = req.clone({
    url: `${baseUrl}/${req.url}`
  });

  return next(updatedReq);
};
