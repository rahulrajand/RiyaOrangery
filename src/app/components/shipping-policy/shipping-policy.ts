import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-shipping-policy',
  standalone: false,
  templateUrl: './shipping-policy.html',
  styleUrl: './shipping-policy.scss',
})
export class ShippingPolicy {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {
    this.title.setTitle('Shipping Policy - Riya Orangery');
    this.meta.updateTag({
      name: 'description',
      content: 'Shipping Policy - Learn about our delivery options and timeline',
    });
  }
}
