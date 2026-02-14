import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-refund-policy',
  standalone: false,
  templateUrl: './refund-policy.html',
  styleUrl: './refund-policy.scss',
})
export class RefundPolicy {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {
    this.title.setTitle('Refund Policy - Riya Orangery');
    this.meta.updateTag({
      name: 'description',
      content: 'Refund Policy - Learn about our return and refund process',
    });
  }
}
