/// <reference types="@angular/localize" />

import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app-module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing-module';
platformBrowser()
  .bootstrapModule(AppModule, {})
  .catch((err) => console.error(err));
