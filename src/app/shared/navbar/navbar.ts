import { Component, OnInit, ElementRef, PLATFORM_ID, Inject } from '@angular/core';
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
  isPlatformBrowser,
} from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';
import { ComponentsService } from '../../components/components.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class Navbar {
  private toggleButton: any;
  private sidebarVisible: boolean;
  public cartItemCount: number = 0;
  public WishlistCount: number = 0;
  public isScrolled: boolean = false;
  public isProductPage: boolean = false;

  public flora_detail: string[] = [];

  enableColorOnScroll = false;
  isMobile = false;

  constructor(
    public location: Location,
    private element: ElementRef,
    private router: Router,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object,
    private componentsService: ComponentsService
  ) {
    this.sidebarVisible = false;
    this.flora_detail = this.componentsService.getAllCategory();
    this.flora_detail.splice(0, 0, 'All Flora');
    this.flora_detail = Array.from(
      new Set(this.flora_detail.flatMap((item) => item.split(',').map((v) => v.trim())))
    );
  }

  ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      let currentRoute = this.route.root;

      while (currentRoute.firstChild) {
        currentRoute = currentRoute.firstChild;
      }

      this.enableColorOnScroll = currentRoute.snapshot.data['colorOnScroll'] ?? false;

      // Check if current route is product page
      this.isProductPage = this.router.url.includes('/Product/');
    });
    this.componentsService.wishlist$.subscribe((wishlist) => {
      this.WishlistCount = wishlist.length || 0;
    });
    this.componentsService.cartlist$.subscribe((cartlist) => {
      this.cartItemCount = cartlist.reduce((acc, item) => acc + item.productcount, 0);
    });
    this.checkScreen();
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('resize', () => {
        this.checkScreen();
      });
      window.addEventListener('scroll', () => {
        this.isScrolled = window.scrollY > 50;
      });
    }
  }
  checkScreen() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
    }
  }

  sidebarOpen() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName('html')[0];
    // console.log(html);
    // console.log(toggleButton, 'toggle');

    setTimeout(function () {
      toggleButton.classList.add('toggled');
    }, 500);
    html.classList.add('nav-open');

    this.sidebarVisible = true;
  }
  sidebarClose() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const html = document.getElementsByTagName('html')[0];
    // console.log(html);
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
  }
  sidebarToggle() {
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  }
  ChangePage(flora: string) {
    if (flora === 'All Flora') {
      flora = 'all';
    }
    this.router.navigate(['/collection/', flora]);
  }
  goToWishlist() {
    this.sidebarToggle();
    this.router.navigate(['/wishlist']);
  }
  goToCart() {
    this.sidebarToggle();
    this.router.navigate(['/cart']);
  }
}
