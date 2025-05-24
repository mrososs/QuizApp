import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { apiPrefixInterceptor } from './core/interceptors/ApiPrefixInterceptor';
import { authTokenInterceptor } from './core/interceptors/authTokenInterceptor';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { spinnerInterceptor } from './core/interceptors/spinner.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        apiPrefixInterceptor,
        authTokenInterceptor,
        spinnerInterceptor,
      ])
    ),
    provideAnimations(),
    provideToastr({
      positionClass: 'toast-top-right',
      progressBar: true,
      timeOut: 3000,
      closeButton: true,
      preventDuplicates: true,
    }),
    provideAnimationsAsync(),
  ],
};
