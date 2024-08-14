import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  resource_urls: { title: string, link: string, icon: string }[] = [
    { title: "r/recipes", link: "https://www.reddit.com/r/recipes/", icon: "reddit" }
  ]
}
