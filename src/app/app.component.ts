import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Title } from '@angular/platform-browser';

import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { IconService } from './services/icon.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    IconService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recipe-app-client';

  constructor(
    private titleService: Title,
    private iconService: IconService
  ) {
    this.titleService.setTitle("Home");
    this.iconService.registerIcons();
  }
}