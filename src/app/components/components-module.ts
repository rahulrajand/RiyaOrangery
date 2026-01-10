import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Components } from './components';
import { ComponentsRoutingModule } from './components-routing-module';
import { FirstPage } from '../components/first-page/first-page';
import { NgIcon, provideIcons } from '@ng-icons/core';
import * as heroicons from '@ng-icons/heroicons/outline'; // Import specific icon
import { featherAirplay } from '@ng-icons/feather-icons';
import { StarRating } from '../shared/star-rating/star-rating';
import { AllProduct } from './all-product/all-product';
import { Collection } from './collection/collection';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { Products } from './products/products';
import { NgbCarouselModule, NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { Wishlist } from './wishlist/wishlist';
import { Cart } from './cart/cart';

@NgModule({
  declarations: [Components, FirstPage, StarRating, AllProduct, Collection, Products, Wishlist, Cart],
  imports: [
    CommonModule,
    FormsModule,
    NouisliderModule,
    ComponentsRoutingModule,
    NgIcon,
    NgbModule,
    NgbNavModule,
  ],
  providers: [
    provideIcons({ ...heroicons }),
    { provide: LocationStrategy, useClass: HashLocationStrategy }, // Register the icons
  ],
})
export class ComponentsModule {}
