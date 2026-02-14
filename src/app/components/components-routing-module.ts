import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPage } from './first-page/first-page';
import { Collection } from './collection/collection';
import { Products } from './products/products';
import { Wishlist } from './wishlist/wishlist';
import { Cart } from './cart/cart';
import { ShippingPolicy } from './shipping-policy/shipping-policy';
import { RefundPolicy } from './refund-policy/refund-policy';
import { PrivacyPolicy } from './privacy-policy/privacy-policy';
import { TermsConditions } from './terms-conditions/terms-conditions';
import { AboutUs } from './about-us/about-us';

const routes: Routes = [
  { path: '', component: FirstPage, data: { colorOnScroll: true } },
  { path: 'collection/:name', component: Collection, data: { colorOnScroll: true } },
  { path: 'Product/:name', component: Products, data: { colorOnScroll: false } },
  { path: 'wishlist', component: Wishlist, data: { colorOnScroll: true } },
  { path: 'cart', component: Cart, data: { colorOnScroll: true } },
  { path: 'about-us', component: AboutUs, data: { colorOnScroll: true } },
  { path: 'shipping-policy', component: ShippingPolicy, data: { colorOnScroll: true } },
  { path: 'refund-policy', component: RefundPolicy, data: { colorOnScroll: true } },
  { path: 'privacy-policy', component: PrivacyPolicy, data: { colorOnScroll: true } },
  { path: 'terms-conditions', component: TermsConditions, data: { colorOnScroll: true } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
