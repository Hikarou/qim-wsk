import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
// import { App } from './app/app';

console.log('Starting application...');

import('./app/app')
  .then(({ App }) => {
    bootstrapApplication(App, appConfig)
      .catch((err) => console.error(err));
  });
