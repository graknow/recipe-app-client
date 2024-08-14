import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {

}
