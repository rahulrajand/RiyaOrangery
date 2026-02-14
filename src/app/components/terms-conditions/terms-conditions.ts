import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-terms-conditions',
  standalone: false,
  templateUrl: './terms-conditions.html',
  styleUrl: './terms-conditions.scss',
})
export class TermsConditions {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {
    this.title.setTitle('Terms & Conditions - Riya Orangery');
    this.meta.updateTag({
      name: 'description',
      content: 'Terms & Conditions - Review our terms of service and conditions of use',
    });
  }
}
