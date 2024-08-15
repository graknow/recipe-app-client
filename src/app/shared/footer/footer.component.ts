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
    { title: "Client Source", link: "https://github.com/graknow/recipe-app-client", icon: "github" },
    { title: "Server Source", link: "https://github.com/graknow/recipe-app", icon: "github" }
  ]
}
