import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { RecipeRandom } from '../../enums/recipe-random.enum';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  providers: [
    RecipeService
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  url: string;

  constructor(
    private recipeService: RecipeService
  ) {
    this.url = recipeService.RecipeBaseUrl;
    this.recipeService.getRecipe(3, RecipeRandom.standard).subscribe(data => { this.url = data.name || "" });
  }
}
