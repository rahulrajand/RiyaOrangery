import {
  Component,
  OnInit,
  Inject,
  Renderer2,
  ElementRef,
  ViewChild,
  PLATFORM_ID,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { Navbar } from './shared/navbar/navbar';
import { filter, Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.scss'],
})
export class App {
  @ViewChild(Navbar) navbarr!: Navbar;

  constructor(
    private renderer: Renderer2,
    private router: Router,
    @Inject(DOCUMENT) private document: any,
    @Inject(PLATFORM_ID) private platformId: Object,
    private element: ElementRef,
    public location: Location
  ) {}
  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const navbar: HTMLElement = this.element.nativeElement.children[0].children[0];
    const setNavbar = () => {
      const isProductPage = window.location.hash.toLowerCase().includes('/product');

      if (isProductPage) {
        navbar.classList.remove('navbar-transparent');
        return;
      }

      // Force transparent unless scrolled past 150
      if (window.pageYOffset < 150) {
        navbar.classList.add('navbar-transparent');
      } else {
        navbar.classList.remove('navbar-transparent');
      }
    };

    // Initial state
    setNavbar();

    // Scroll handling (OVERWRITES other scripts)
    this.renderer.listen('window', 'scroll', () => {
      setNavbar();
    });

    // Route change handling (Angular navigation)
    this.renderer.listen('window', 'popstate', () => {
      setNavbar();
    });
  }
  removeFooter() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice(1);
    if (titlee === 'signup' || titlee === 'nucleoicons') {
      return false;
    } else {
      return true;
    }
  }
}
