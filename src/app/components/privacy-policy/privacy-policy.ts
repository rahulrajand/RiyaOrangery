import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-privacy-policy',
  standalone: false,
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {
    this.title.setTitle('Privacy Policy - Riya Orangery');
    this.meta.updateTag({
      name: 'description',
      content: 'Privacy Policy - How we protect and use your personal information',
    });
  }
}
