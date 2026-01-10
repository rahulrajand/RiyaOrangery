import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule, routes } from './app-routing-module';
import { App } from './app';
import { ComponentsModule } from './components/components-module';
import { Navbar } from './shared/navbar/navbar';
import { provideRouter, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxBootstrapIconsModule, flower1, flower2 } from 'ngx-bootstrap-icons';
const icons = { flower1, flower2 };
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import { StarRating } from './shared/star-rating/star-rating';
import { ScrollToTop } from './shared/scroll-to-top/scroll-to-top';
import { Footer } from './shared/footer/footer';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [App, Navbar, ScrollToTop, Footer],
  imports: [
    BrowserModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxBootstrapIconsModule.pick(icons),
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
  ],
  bootstrap: [App],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
