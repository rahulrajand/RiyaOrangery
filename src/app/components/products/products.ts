import { Component, ViewChild } from '@angular/core';
import { CartDetails, ProductDetails } from '../components.model';
import { ComponentsService } from '../components.service';
import { ActivatedRoute } from '@angular/router';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  quantity = 1;
  tab = 'desc';
  selectedImage: string = '';
  product_detail: ProductDetails = {} as ProductDetails;
  @ViewChild('carousel', { static: false }) carousel!: NgbCarousel;
  price_range: number = 0;
  price_range_updated: number = 0;
  full_product_detail = new Array<ProductDetails>();
  prod_detail = new Array<ProductDetails>();
  errorMessage: string = '';
  diam: string[] = [];
  pot: string[] = ['No Pot'];
  Soil: string[] = ['Without Soil', 'With Soil'];
  diamet: string = '';
  soil: string = '';
  pots: string = '';
  categoryForBackLink: string = '';

  constructor(
    private componentservice: ComponentsService,
    private route: ActivatedRoute,
    private componentsService: ComponentsService,
    private meta: Meta,
    private title: Title
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('name');
      this.loadPlantData(id);
    });
  }
  loadPlantData(id: string | null) {
    console.log('Loading product data for id:', id);
    this.product_detail = null as any;
    this.selectedImage = '';
    this.diam = [];
    this.pot = [];
    this.prod_detail = [];

    this.diamet = '';
    this.pots = '';
    this.soil = '';
    this.price_range = 0;
    this.price_range_updated = 0;
    this.full_product_detail = null as any;
    this.prod_detail = null as any;
    this.errorMessage = '';
    this.diam = [];
    this.pot = ['No Pot'];
    this.Soil = ['Without Soil', 'With Soil'];

    this.product_detail = this.componentsService.getProductByname(id!) as ProductDetails;
    this.title.setTitle(`${this.product_detail.productname} Indoor Plant | Riya Orangery`);

    this.meta.updateTag({
      name: 'description',
      content: `Buy ${this.product_detail.productname} indoor plant online from Riya Orangery. ${this.product_detail.shortDescription}`,
    });
    if (!this.product_detail) {
      console.error('Product not found');
    } else {
      this.selectedImage = this.product_detail.productimg[0];
      this.categoryForBackLink = 'all';
    }
    this.componentservice.currentData$.subscribe((data) => {
      this.full_product_detail = data;
    });
    console.log(this.full_product_detail);
    this.prod_detail = [];
    const currentLabels = this.product_detail.productlabel
      .split(',')
      .map((l) => l.trim().toLowerCase());

    for (let i = 0; i < this.full_product_detail.length; i++) {
      const itemLabels = this.full_product_detail[i].productlabel
        .split(',')
        .map((l) => l.trim().toLowerCase());

      const isAnyLabelMatch = currentLabels.some((label) => itemLabels.includes(label));
      if (
        isAnyLabelMatch &&
        this.full_product_detail[i].productid !== this.product_detail.productid
      ) {
        this.prod_detail.push(this.full_product_detail[i]);
      }
    }
    console.log(this.prod_detail);
    this.getRandomProducts(3);
    console.log(this.prod_detail);
    for (let size of this.product_detail.productsize) {
      this.diam.push('' + size + ' inches');
    }
    for (let size of this.product_detail.productpotsize) {
      this.pot.push('' + size + ' inches');
    }
  }

  getRandomProducts(count: number = 3) {
    this.prod_detail = [...this.prod_detail].sort(() => 0.5 - Math.random()).slice(0, count);
  }

  selectImage(i: number) {
    this.selectedImage = this.product_detail.productimg[i];

    this.carousel.select(`slide-${i}`);
  }

  public updatePriceRange() {
    console.log('called');
    const max = this.diamet.match(/\d+/g)?.map(Number) || 0;
    let index = this.product_detail.productsize.indexOf(max.toString());
    this.price_range = this.product_detail.productprice[index];
    this.price_range_updated = Math.round(
      this.price_range - (this.price_range * this.product_detail.discount) / 100
    );
    console.log(this.pots);
    switch (this.pots) {
      case '3 inches':
        this.price_range += 20;
        this.price_range_updated += 20;
        break;
      case '4 inches':
        this.price_range += 25;
        this.price_range_updated += 25;
        break;
      default:
        break;
    }
    if (this.soil == 'With Soil') {
      this.price_range += 15;
      this.price_range_updated += 15;
    }
    this.errorMessage = '';
    console.log(this.price_range, '   ', this.price_range_updated);
  }

  public onDiameterClick(diameter: Event | any) {
    const clickedElement = diameter.target as HTMLButtonElement;
    this.diamet = clickedElement.innerText;
    if (this.soil == '' && this.pots == '') {
      this.errorMessage = 'Please select Soil & Pot!';
      return;
    } else if (this.soil == '') {
      this.errorMessage = 'Please select Soil!';
      return;
    } else if (this.pots == '') {
      this.errorMessage = 'Please select Pot!';
      return;
    }
    this.updatePriceRange();
  }

  public onPotClick(pot: Event | any) {
    const clickedElement = pot.target as HTMLButtonElement;
    this.pots = clickedElement.innerText;
    if (this.soil == '' && this.diamet == '') {
      this.errorMessage = 'Please select Soil & Plant Diameter!';
      return;
    } else if (this.soil == '') {
      this.errorMessage = 'Please select Soil!';
      return;
    } else if (this.diamet == '') {
      this.errorMessage = 'Please select Plant Diameter!';
      return;
    }
    this.updatePriceRange();
  }

  public onSoilClick(diameter: Event | any) {
    const clickedElement = diameter.target as HTMLButtonElement;
    this.soil = clickedElement.innerText;
    if (this.pots == '' && this.diamet == '') {
      this.errorMessage = 'Please select Pot & Plant Diameter!';
      return;
    } else if (this.pots == '') {
      this.errorMessage = 'Please select Pot!';
      return;
    } else if (this.diamet == '') {
      this.errorMessage = 'Please select Plant Diameter!';
      return;
    }
    this.updatePriceRange();
  }

  toggleWishlist(product: any, event: Event) {
    event.stopPropagation(); // prevents routerLink navigation
    product.isWishlisted = !product.isWishlisted;
    this.componentservice.updateWishlist(product);
  }

  AddtoCart(product: any, event: Event) {
    if (this.soil == '' || this.diamet == '' || this.pots == '') {
      this.errorMessage = 'Please select ';
      console.log(this.errorMessage);
      if (this.diamet == '') {
        this.errorMessage += ' Plant Diameter,';
      }
      console.log(this.errorMessage);
      if (this.soil == '') {
        this.errorMessage += ' Soil,';
      }
      console.log(this.errorMessage);
      if (this.pots == '') {
        this.errorMessage += ' Pot,';
      }
      console.log(this.errorMessage);
      this.errorMessage = this.errorMessage.slice(0, -1) + '!';
      console.log(this.errorMessage);
      return;
    }
    let cart: CartDetails = {} as CartDetails;
    cart.productid = product.productid;
    cart.productname = product.productname;
    cart.productsize = this.diamet;
    cart.productpotsize = this.pots;
    cart.productsoil = this.soil;
    cart.productcount = this.quantity;
    cart.productimg = product.productimg[0];
    cart.productprice = this.price_range;
    cart.discount = product.discount;
    cart.productdisprice = this.price_range_updated;
    if (this.price_range_updated == 0) {
      cart.producttotal = this.quantity * this.price_range;
    } else {
      cart.producttotal = this.quantity * this.price_range_updated;
    }

    this.componentservice.updateCartlist(cart);
    this.errorMessage = '';
  }
}
