import {
  Component,
  OnInit,
  Renderer2,
  Inject,
  PLATFORM_ID,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetails } from '../components.model';
import { ComponentsService } from '../components.service';

@Component({
  selector: 'app-first-page',
  standalone: false,
  templateUrl: './first-page.html',
  styleUrls: ['./first-page.scss'],
})
export class FirstPage implements OnInit {
  page = 4;
  page1 = 5;
  @ViewChild('mySection') mySection!: ElementRef;
  product_detail = new Array<ProductDetails>();
  full_product_detail = new Array<ProductDetails>();
  isMobile = false;
  showNotice = true;

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object,
    private componentservice: ComponentsService
  ) {
    this.componentservice.currentData$.subscribe((data) => {
      this.full_product_detail = data;
    });
    for (let i = 0; i < this.full_product_detail.length; i++) {
      if (this.full_product_detail[i].frontpage == true) {
        this.product_detail.push(this.full_product_detail[i]);
      }
    }
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreen();
      window.addEventListener('resize', () => {
        this.checkScreen();
      });
    }
    if (isPlatformBrowser(this.platformId)) {
      const dismissed = localStorage.getItem('localStorageNoticeDismissed');
      if (dismissed === 'true') {
        this.showNotice = false;
      } else {
        this.showNotice = true;
      }
    }
  }
  checkScreen() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
    }
  }
  isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }

  isDisabled(date: NgbDateStruct, current: { month: number }) {
    return date.month !== current.month;
  }
  dismissNotice() {
    this.showNotice = false;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('localStorageNoticeDismissed', 'true');
    }
  }

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const input_group = document.getElementsByClassName('input-group');
  }

  scrollToSection() {
    this.mySection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  toggleWishlist(product: any, event: Event) {
    event.stopPropagation(); // prevents routerLink navigation
    product.isWishlisted = !product.isWishlisted;
    this.componentservice.updateWishlist(product);
  }
}
