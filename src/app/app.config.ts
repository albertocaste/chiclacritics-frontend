import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ROUTES } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authRawgInterceptor } from './modules/game/infrastructure/interceptors/auth-rawg.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(ROUTES),
    provideClientHydration(),
    provideHttpClient(withInterceptors([authRawgInterceptor]))
  ]
};
