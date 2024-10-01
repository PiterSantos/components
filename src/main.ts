import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from './app/header/header.component';
import { BannerComponent } from './app/banner/banner.component';
import { ImageComponent } from './app/image/image.component';

@Component({
  imports: [HeaderComponent, BannerComponent, ImageComponent],
  selector: 'app-root',
  standalone: true,
  template: `
    <app-header></app-header>
    <app-banner></app-banner>
    <app-image></app-image>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
