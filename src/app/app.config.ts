import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  provideRouter,
  withHashLocation,
  withViewTransitions,
} from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { headerInterceptor } from './core/interceptors/header.interceptor';
import { errorsInterceptor } from './core/interceptors/errors.interceptor';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxSpinnerModule } from 'ngx-spinner';
import { loadingInterceptor } from './core/interceptors/loading.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideClientHydration(),
    provideHttpClient(
      withFetch(),
      withInterceptors([
        headerInterceptor,
        errorsInterceptor,
        loadingInterceptor,
      ])
    ),
    provideAnimations(),
    provideToastr(),

    importProvidersFrom(SweetAlert2Module, NgxSpinnerModule),
  ],
};
