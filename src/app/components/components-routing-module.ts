import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPage } from './first-page/first-page';
import { Collection } from './collection/collection';
import { Products } from './products/products';
import { Wishlist } from './wishlist/wishlist';
import { Cart } from './cart/cart';

const routes: Routes = [
  { path: '', redirectTo: 'fpage', pathMatch: 'full' },
  { path: 'fpage', component: FirstPage, data: { colorOnScroll: true } },
  { path: 'collection/:name', component: Collection, data: { colorOnScroll: true } },
  { path: 'Product/:name', component: Products, data: { colorOnScroll: false } },
  { path: 'wishlist', component: Wishlist, data: { colorOnScroll: true } },
  { path: 'cart', component: Cart, data: { colorOnScroll: true } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
