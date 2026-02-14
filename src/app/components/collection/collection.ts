import { Component, ElementRef, HostListener, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { ComponentsService } from '../components.service';
import { ProductDetails } from '../components.model';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-collection',
  standalone: false,
  templateUrl: './collection.html',
  styleUrl: './collection.scss',
})
export class Collection {
  @ViewChild('mySection') mySection!: ElementRef;
  full_product_detail = new Array<ProductDetails>();
  product_detail = new Array<ProductDetails>();
  product_detail_copy = new Array<ProductDetails>();
  visibleCount: number = 20;
  category_selected: string = '';
  plantDM_selected: string[] = [];
  plantPR_selected: string = '';
  categoryDefaultCount: number = 6;
  showAllCategories: boolean = false;

  scrollToSection() {
    this.mySection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  constructor(
    private componentservice: ComponentsService,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object,
    private meta: Meta,
    private title: Title,
  ) {
    this.title.setTitle('Indoor Plants Collection | Riya Orangery');
    this.meta.updateTag({
      name: 'description',
      content: 'Browse indoor plants, succulents, and cactus collection at Riya Orangery.',
    });
  }

  isFilterCollapsed = false;
  mobileFiltersOpen = false;

  categories: { name: string; checked: boolean }[] = [];
  diam: string[] = [];
  minprices: number = 0;
  maxprices: number = 0;
  doubleSlider: number[] = [];
  Dropdown_select: string = 'Sort by Popularity';
  Dropdown_Option: string[] = [
    'Sort by Popularity',
    'Sort by Alphabetical',
    'Sort by Low to high',
    'Sort By high to low',
  ];

  toggleFilter() {
    this.isFilterCollapsed = !this.isFilterCollapsed;
  }

  ngAfterViewInit() {
    this.doubleSlider = [...this.doubleSlider];
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.add('shop-filter-active');
    }
    this.doubleSlider = [...this.doubleSlider];
    this.checkWindowSize();
    this.componentservice.currentData$.subscribe((data) => {
      this.full_product_detail = data;
      this.route.paramMap.subscribe((params) => {
        const flora = params.get('name');
        this.onCategoryClick({ target: { innerText: flora } });
      });
    });
    let flora_detail = this.componentservice.getAllCategory();
    flora_detail = Array.from(
      new Set(flora_detail.flatMap((item) => item.split(',').map((v) => v.trim()))),
    );
    this.categories = flora_detail.map((flora) => ({
      name: flora,
      checked: false,
    }));
    this.showAllCategories = false;
    const allSizes = this.full_product_detail.flatMap((p) => p.productsize.map(Number));
    const maxSize = Math.max(...allSizes);
    for (let i = 0; i < maxSize; i += 2) {
      this.diam.push('' + i + ' - ' + (i + 2) + ' inches');
    }
    const lows = this.full_product_detail.map((p) => p.productlowprice);
    const highs = this.full_product_detail.map((p) => p.producthighprice);
    this.minprices = Math.min(...lows);
    this.maxprices = Math.max(...highs);
    this.doubleSlider.push(this.minprices);
    this.doubleSlider.push(this.maxprices);
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.remove('shop-filter-active');
      document.body.style.overflow = '';
    }
  }

  toggleMobileFilters() {
    this.mobileFiltersOpen = !this.mobileFiltersOpen;
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = this.mobileFiltersOpen ? 'hidden' : '';
    }
  }

  filterToggle = {
    category: true,
    'plant-Diameter': true,
    price: true,
  };

  toggleFilterBox(type: keyof typeof this.filterToggle) {
    this.filterToggle[type] = !this.filterToggle[type];
  }

  get categoryDisplayCount(): number {
    return this.showAllCategories ? this.categories.length : this.categoryDefaultCount;
  }

  toggleCategoryList() {
    this.showAllCategories = !this.showAllCategories;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkWindowSize();
  }

  private checkWindowSize() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const width = window.innerWidth;

    // Bootstrap lg breakpoint = 992px
    if (width >= 992 && this.mobileFiltersOpen) {
      this.mobileFiltersOpen = false;
      document.body.style.overflow = '';
    }
  }

  applyFilters() {
    // STEP 1: CATEGORY FILTER (MANDATORY)
    let data = this.category_selected
      ? this.full_product_detail.filter((p) => p.productlabel.includes(this.category_selected))
      : [...this.full_product_detail];

    // STEP 2: DIAMETER FILTER (OPTIONAL)
    if (this.plantDM_selected.length > 0) {
      const ranges = this.plantDM_selected
        .map((range) => range.match(/\d+/g)?.map(Number) ?? [])
        .filter((vals) => vals.length === 2) as number[][];

      data = data.filter((p) =>
        p.productsize.some((size) => {
          const s = +size;
          return ranges.some(([minD, maxD]) => s >= minD && s <= maxD);
        }),
      );
    }

    // STEP 3: PRICE FILTER (OPTIONAL)
    if (this.plantPR_selected) {
      const [minP, maxP] = this.plantPR_selected.replace(/[₹\s]/g, '').split('-').map(Number);

      data = data.filter((p) => p.producthighprice >= minP && p.productlowprice <= maxP);
    }

    this.product_detail = data;
    this.resetVisibleCount();
  }

  public onCategoryClick(category: Event | any) {
    const clickedElement = category.target as HTMLLabelElement;
    this.category_selected =
      clickedElement.innerText === 'all' || clickedElement.innerText === 'All Category'
        ? ''
        : clickedElement.innerText;

    // reset secondary filters
    this.plantDM_selected = [];
    this.plantPR_selected = '';

    this.applyFilters();
  }
  public onDiameterClick(diameter: Event | any) {
    const clickedElement = diameter.target as HTMLButtonElement;
    const value = clickedElement.innerText;
    if (this.plantDM_selected.includes(value)) {
      this.plantDM_selected = this.plantDM_selected.filter((v) => v !== value);
    } else {
      this.plantDM_selected = [...this.plantDM_selected, value];
    }
    this.applyFilters();
  }
  public onPriceClick(price: Event | any) {
    const [min, max] = this.doubleSlider;
    this.plantPR_selected = `${min}-${max}`;
    this.applyFilters();
  }

  toggleWishlist(product: any, event: Event) {
    event.stopPropagation(); // prevents routerLink navigation
    event.preventDefault(); // prevents link navigation
    product.isWishlisted = !product.isWishlisted;
    this.componentservice.updateWishlist(product);
  }
  SortBy(option: any) {
    switch (option) {
      case 'Sort by Alphabetical':
        this.product_detail = [...this.product_detail].sort((a, b) =>
          a.productname.localeCompare(b.productname, undefined, { sensitivity: 'base' }),
        );
        break;

      case 'Sort by Low to high':
        this.product_detail = [...this.product_detail].sort(
          (a, b) => a.productlowprice - b.productlowprice,
        );
        break;

      case 'Sort By high to low':
        this.product_detail = [...this.product_detail].sort(
          (a, b) => b.producthighprice - a.producthighprice,
        );
        break;

      default:
        this.applyFilters();
        break;
    }
    this.Dropdown_select = option;
    this.visibleCount = Math.min(this.visibleCount, this.product_detail.length);
  }

  loadMore() {
    this.visibleCount = Math.min(this.visibleCount + 10, this.product_detail.length);
  }

  private resetVisibleCount() {
    this.visibleCount = Math.min(20, this.product_detail.length);
  }
}
