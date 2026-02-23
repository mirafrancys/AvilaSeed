import { ApplicationConfig, enableProdMode, importProvidersFrom, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { BrowserModule, provideClientHydration, withEventReplay, withHttpTransferCacheOptions, withI18nSupport } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';

import { environment } from '../environments/environment.prod';

if (environment.production) {
  enableProdMode();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, withComponentInputBinding()), 
    provideHttpClient(withFetch()),
    provideClientHydration(
      withEventReplay(), 
      withHttpTransferCacheOptions({includePostRequests: true}),
      withI18nSupport()),
    importProvidersFrom(
      BrowserModule, 
    ),
    provideStoreDevtools({ 
      name: 'Avila-Seed DevTools',
      maxAge: 25, 
      logOnly: !isDevMode() })
  ]
};
