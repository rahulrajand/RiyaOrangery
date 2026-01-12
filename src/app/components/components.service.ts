import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartDetails, ProductDetails } from './components.model';
import * as data from './product.json';

@Injectable({
  providedIn: 'root',
})
export class ComponentsService {
  private dataSubject = new BehaviorSubject<ProductDetails[]>([]);
  public currentData$: Observable<ProductDetails[]> = this.dataSubject.asObservable();

  private wishlist = new BehaviorSubject<ProductDetails[]>([]);
  public wishlist$: Observable<ProductDetails[]> = this.wishlist.asObservable();

  private cartlist = new BehaviorSubject<CartDetails[]>([]);
  public cartlist$: Observable<CartDetails[]> = this.cartlist.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.updateData();
    if (isPlatformBrowser(this.platformId)) {
      const stored = localStorage.getItem('wishlist');
      if (stored) {
        for (let id of JSON.parse(stored)) {
          const product = this.getProductById(id);
          if (product) {
            product.isWishlisted = true;
            this.wishlist.next([...this.wishlist.value, product]);
          }
        }
      }
      const cart_stored = localStorage.getItem('cartlist');
      if (cart_stored) {
        for (let id of JSON.parse(cart_stored)) {
          this.cartlist.next([...this.cartlist.value, id]);
        }
      }
    }
  }

  updateWishlist(product: ProductDetails) {
    let updatevalue = [];
    const index = this.wishlist.value.findIndex((p) => p.productid === product.productid);
    if (index === -1) {
      this.wishlist.next([...this.wishlist.value, product]);
    } else {
      this.wishlist.next(this.wishlist.value.filter((p) => p.productid !== product.productid));
    }
    for (let i = 0; i < this.wishlist.value.length; i++) {
      updatevalue.push(this.wishlist.value[i].productid);
    }
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('wishlist', JSON.stringify(updatevalue));
    }
  }

  updateCartlist(product: CartDetails) {
    let updatevalue = [];
    const index = this.cartlist.value.findIndex(
      (p) =>
        p.productid === product.productid &&
        p.productsize === product.productsize &&
        p.productpotsize === product.productpotsize &&
        p.productsoil === product.productsoil
    );
    if (index === -1) {
      this.cartlist.next([...this.cartlist.value, product]);
    } else {
      this.cartlist.value[index].productcount += product.productcount;
      this.cartlist.next([...this.cartlist.value]);
    }
    for (let i = 0; i < this.cartlist.value.length; i++) {
      updatevalue.push(this.cartlist.value[i]);
    }
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cartlist', JSON.stringify(updatevalue));
    }
  }

  updateData() {
    const products: ProductDetails[] = [];
    for (let prod in data.product) {
      let product: ProductDetails = {} as ProductDetails;
      product.productid = data.product[prod].productid;
      product.productname = data.product[prod].productname;
      product.productlabel = data.product[prod].productlabel;
      product.productlowprice = data.product[prod].productlowprice;
      product.producthighprice = data.product[prod].producthighprice;
      product.productprice = data.product[prod].productprice;
      product.productdisc = data.product[prod].productdisc;
      product.productrating = data.product[prod].productrating;
      product.frontpage = data.product[prod].frontpage;
      product.productimg = data.product[prod].productimg;
      product.productsize = data.product[prod].productsize;
      product.description = data.product[prod].description;
      product.shortDescription = data.product[prod].shortDescription;
      product.stockAvailable = data.product[prod].stockAvailable;
      product.discount = data.product[prod].discount;
      product.productpotsize = data.product[prod].productpotsize;
      product.tips = data.product[prod].tips;
      product.productsciname = data.product[prod].productsciname;

      products.push(product);
    }
    this.dataSubject.next(products);
  }

  getProductById(id: string) {
    return this.dataSubject.value.find((p) => p.productid === id);
  }
  getProductByname(id: string) {
    return this.dataSubject.value.find((p) => p.productname === id);
  }
  getAllCategory() {
    return this.dataSubject.value
      .map((p) => p.productlabel)
      .filter((value, index, self) => self.indexOf(value) === index);
  }

  removeFromCart(product: CartDetails) {
    const updatedCart = this.cartlist.value.filter(
      (p) =>
        !(
          p.productid === product.productid &&
          p.productsize === product.productsize &&
          p.productpotsize === product.productpotsize &&
          p.productsoil === product.productsoil
        )
    );
    this.cartlist.next(updatedCart);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cartlist', JSON.stringify(updatedCart));
    }
  }

  updateCartItemQuantity(product: CartDetails, quantity: number) {
    const index = this.cartlist.value.findIndex(
      (p) =>
        p.productid === product.productid &&
        p.productsize === product.productsize &&
        p.productpotsize === product.productpotsize &&
        p.productsoil === product.productsoil
    );
    if (index !== -1) {
      this.cartlist.value[index].productcount = quantity;
      if (this.cartlist.value[index].productdisprice === 0) {
        this.cartlist.value[index].producttotal =
          quantity * this.cartlist.value[index].productprice;
      } else {
        this.cartlist.value[index].producttotal =
          quantity * this.cartlist.value[index].productdisprice;
      }
      this.cartlist.next([...this.cartlist.value]);
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('cartlist', JSON.stringify(this.cartlist.value));
      }
    }
  }

  clearCart() {
    this.cartlist.next([]);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('cartlist');
    }
  }
}
