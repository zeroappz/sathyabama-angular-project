import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

if (environment.production == false) {
  console.log('Environment: Development Mode from main.ts');
  console.log(environment.appTitle)
  console.log(environment.appDescription)
  console.log(environment.version)
  console.log(environment.googleAPIKey)
} else {
  console.log('Environment: Production Mode from main.ts');
  enableProdMode();
  window.console.log = () => { };
  window.console.error = () => { };
  window.console.warn = () => { };
  window.console.info = () => { };
  window.console.debug = () => { };
}
