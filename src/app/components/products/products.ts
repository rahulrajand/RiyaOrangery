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
  selectedSizeInStock: boolean | null = null;
  categoryForBackLink: string = '';
  private getCategoryKey(): string {
    return (this.product_detail?.category || '').trim().toLowerCase();
  }

  isPlantCategory(): boolean {
    return this.getCategoryKey().includes('plant');
  }

  hasPotOptions(): boolean {
    return this.getCategoryKey() === 'plant';
  }

  hasSoilOptions(): boolean {
    return this.getCategoryKey() === 'plant';
  }

  constructor(
    private componentservice: ComponentsService,
    private route: ActivatedRoute,
    private componentsService: ComponentsService,
    private meta: Meta,
    private title: Title,
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('name');
      this.loadPlantData(id);
    });
  }
  loadPlantData(id: string | null) {
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
    this.selectedSizeInStock = null;
    this.full_product_detail = null as any;
    this.prod_detail = null as any;
    this.errorMessage = '';
    this.diam = [];

    this.product_detail = this.componentsService.getProductByname(id!) as ProductDetails;
    this.title.setTitle(`${this.product_detail.productname} Indoor Plant | Riya Orangery`);
    this.pot = this.hasPotOptions() ? ['No Pot'] : [];
    this.Soil = this.hasSoilOptions() ? ['Without Soil', 'With Soil'] : [];
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
    this.getRandomProducts(3);
    for (let size of this.product_detail.productsize) {
      this.diam.push(this.isPlantCategory() ? `${size} inches` : `${size}`);
    }
    if (this.hasPotOptions()) {
      for (let size of this.product_detail.productpotsize) {
        this.pot.push(`${size} inches`);
      }
    }
  }

  getRandomProducts(count: number = 3) {
    this.prod_detail = [...this.prod_detail].sort(() => 0.5 - Math.random()).slice(0, count);
  }

  selectImage(i: number) {
    this.selectedImage = this.product_detail.productimg[i];

    this.carousel.select(`slide-${i}`);
  }

  getRiskClass(risk?: string) {
    const value = (risk || '').toLowerCase();

    if (value.includes('low') || value.includes('safe')) {
      return 'risk-low';
    }
    if (value.includes('medium') || value.includes('moderate')) {
      return 'risk-medium';
    }
    if (
      value.includes('high') ||
      value.includes('severe') ||
      value.includes('extreme') ||
      value.includes('critical')
    ) {
      return 'risk-high';
    }

    return 'risk-unknown';
  }

  public updatePriceRange() {
    const sizeValue = this.getSizeValueFromLabel(this.diamet);
    let index = sizeValue ? this.product_detail.productsize.indexOf(sizeValue) : -1;
    if (index < 0) {
      index = 0;
    }
    this.price_range = this.product_detail.productprice[index];
    const sizeDiscount = this.getDiscountForSelectedSize();
    this.price_range_updated = Math.round(
      this.price_range - (this.price_range * sizeDiscount) / 100,
    );
    if (this.hasPotOptions()) {
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
    }
    if (this.hasSoilOptions() && this.soil == 'With Soil') {
      this.price_range += 15;
      this.price_range_updated += 15;
    }
    this.errorMessage = '';
  }

  private getSizeValueFromLabel(label: string): string | null {
    if (!label) {
      return null;
    }

    const trimmedLabel = label.trim();

    // First check if the exact label exists in productsize (handles cases like "100g", "1kg", etc.)
    if (this.product_detail?.productsize?.includes(trimmedLabel)) {
      return trimmedLabel;
    }

    // For plant category items with " inches" suffix, extract just the numeric part
    if (this.isPlantCategory()) {
      const match = trimmedLabel.match(/\d+/);
      if (match) {
        return match[0];
      }
    }

    // Return the trimmed label as-is for other categories
    return trimmedLabel;
  }

  private isSizeValueInStock(sizeValue: string | null): boolean {
    if (!sizeValue) {
      return this.product_detail?.stockAvailable !== false;
    }
    const sizeIndex = this.product_detail.productsize.indexOf(sizeValue);
    if (sizeIndex < 0) {
      return this.product_detail?.stockAvailable !== false;
    }
    const stockBySize = this.product_detail.stockBySize;
    if (!Array.isArray(stockBySize)) {
      return this.product_detail?.stockAvailable !== false;
    }
    return stockBySize[sizeIndex] === true;
  }

  private getDiscountForSelectedSize(): number {
    const sizeValue = this.getSizeValueFromLabel(this.diamet);
    if (!sizeValue) {
      return this.product_detail?.discount || 0;
    }
    const sizeIndex = this.product_detail.productsize.indexOf(sizeValue);
    if (sizeIndex < 0) {
      return this.product_detail?.discount || 0;
    }
    const discountBySize = this.product_detail.discountBySize;
    if (!Array.isArray(discountBySize)) {
      return this.product_detail?.discount || 0;
    }
    return discountBySize[sizeIndex] || 0;
  }

  public isSizeInStockLabel(label: string): boolean {
    return this.isSizeValueInStock(this.getSizeValueFromLabel(label));
  }

  public canAddToCart(): boolean {
    if (this.selectedSizeInStock === false) {
      return false;
    }
    return this.product_detail?.stockAvailable === true;
  }

  public onDiameterClick(diameter: Event | any) {
    const clickedElement = diameter.target as HTMLButtonElement;
    this.diamet = clickedElement.innerText;
    this.selectedSizeInStock = this.isSizeInStockLabel(this.diamet);
    if (this.selectedSizeInStock === false) {
      this.errorMessage = 'Selected size is out of stock.';
      return;
    }
    if (this.hasPotOptions() && this.pots == '' && this.hasSoilOptions() && this.soil == '') {
      this.errorMessage = 'Please select Soil & Pot!';
      return;
    }
    if (this.hasSoilOptions() && this.soil == '') {
      this.errorMessage = 'Please select Soil!';
      return;
    }
    if (this.hasPotOptions() && this.pots == '') {
      this.errorMessage = 'Please select Pot!';
      return;
    }
    this.updatePriceRange();
  }

  public onPotClick(pot: Event | any) {
    if (!this.hasPotOptions()) {
      return;
    }
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
    if (!this.hasSoilOptions()) {
      return;
    }
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
    if (this.selectedSizeInStock === false) {
      this.errorMessage = 'Selected size is out of stock.';
      return;
    }
    if (
      (this.hasSoilOptions() && this.soil == '') ||
      this.diamet == '' ||
      (this.hasPotOptions() && this.pots == '')
    ) {
      this.errorMessage = 'Please select ';
      if (this.diamet == '') {
        this.errorMessage += ' Plant Diameter,';
      }
      if (this.hasSoilOptions() && this.soil == '') {
        this.errorMessage += ' Soil,';
      }
      if (this.hasPotOptions() && this.pots == '') {
        this.errorMessage += ' Pot,';
      }
      this.errorMessage = this.errorMessage.slice(0, -1) + '!';
      return;
    }
    let cart: CartDetails = {} as CartDetails;
    cart.productid = product.productid;
    cart.productname = product.productname;
    cart.productsize = this.diamet;
    cart.productpotsize = this.hasPotOptions() ? this.pots : '';
    cart.productsoil = this.hasSoilOptions() ? this.soil : '';
    cart.productcount = this.quantity;
    cart.productimg = product.productimg[0];
    cart.productprice = this.price_range;
    cart.discount = this.getDiscountForSelectedSize();
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
