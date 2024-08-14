import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Title } from '@angular/platform-browser';

import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';

import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recipe-app-client';

  constructor(private titleService: Title, private matIconRegistry: MatIconRegistry) {
    this.titleService.setTitle("Home");

    this.matIconRegistry
      .addSvgIcon('reddit', '../assets/icons/reddit-icon.svg');
  }
}