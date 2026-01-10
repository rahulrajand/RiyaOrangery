import { Component } from '@angular/core';
import { ComponentsService } from '../components.service';
import { ProductDetails } from '../components.model';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-wishlist',
  standalone: false,
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.scss',
})
export class Wishlist {
  wishlist: ProductDetails[] = [];
  allSelected = false; // Tracks header checkbox

  constructor(
    private componentservice: ComponentsService,
    private meta: Meta,
    private title: Title
  ) {
    this.componentservice.wishlist$.subscribe((data) => {
      this.wishlist = data.map((item) => ({ ...item, selected: false }));
    });
  }

  removelist(product: any, event: Event) {
    product.isWishlisted = !product.isWishlisted;
    this.componentservice.updateWishlist(product);
  }

  AddtoCart(item: any, list: Event) {
    console.log('Add to cart', item);
  }

  toggleAll(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.allSelected = checked;
    this.wishlist.forEach((item) => (item.selected = checked));
  }

  // CHECK IF HEADER SHOULD BE CHECKED
  checkIfAllSelected() {
    this.allSelected = this.wishlist.every((item) => item.selected);
  }
}
