import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  standalone: false,
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
})
export class AboutUs {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {
    this.title.setTitle('About Us - Riya Orangery');
    this.meta.updateTag({
      name: 'description',
      content:
        'About Riya Orangery - Learn about our mission, vision, and commitment to delivering quality indoor plants',
    });
  }
}
