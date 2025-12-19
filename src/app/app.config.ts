import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { APPLICATION_LOGGER } from '@dev/qore';
import { LoggerService } from './core/services/logger.service';
import { ProductService } from './core/services/product.service';

export const appConfig: ApplicationConfig = {
  
  providers: [
    { provide: APPLICATION_LOGGER, useClass: LoggerService },
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
  
};
