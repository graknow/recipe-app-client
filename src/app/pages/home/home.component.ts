import { Component, ViewChild } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { RecipeRandom } from '../../enums/recipe-random.enum';
import { RecipeWidgetComponent } from '../../shared/recipe-widget/recipe-widget.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RecipeWidgetComponent
  ],
  providers: [
    RecipeService
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  url: string;

  @ViewChild('dailyRecipe') private dailyRecipeWidget: RecipeWidgetComponent = new RecipeWidgetComponent();

  constructor(
    private recipeService: RecipeService
  ) {
    this.url = recipeService.RecipeBaseUrl;
    let response = this.recipeService.getRecipeRandom(RecipeRandom.date);

    response.subscribe(data => {
      this.dailyRecipeWidget.init(data.id, this.recipeService.responseToWidgetView(data));
    });
  }
}
