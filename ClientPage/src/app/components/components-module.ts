import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Components } from './components';
import { ComponentsRoutingModule } from './components-routing-module';
import { FirstPage } from '../components/first-page/first-page';
import { NgIcon, provideIcons } from '@ng-icons/core';
import * as heroicons from '@ng-icons/heroicons/outline'; // Import specific icon
import { featherAirplay } from '@ng-icons/feather-icons';
import { StarRating } from '../shared/star-rating/star-rating';


@NgModule({
  declarations: [
    Components,
    FirstPage,
    StarRating,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    [NgIcon]
  ],
  providers: [
    provideIcons({ ...heroicons }) // Register the icons
  ],
})
export class ComponentsModule { }
