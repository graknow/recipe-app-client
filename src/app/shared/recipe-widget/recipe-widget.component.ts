import { Component } from '@angular/core';
import { RecipeWidgetView } from '../../interfaces/recipe.interface';

@Component({
  selector: 'recipe-widget',
  standalone: true,
  imports: [],
  templateUrl: './recipe-widget.component.html',
  styleUrl: './recipe-widget.component.css'
})
export class RecipeWidgetComponent {
  private view: RecipeWidgetView;
  private id: number;

  constructor() {
    this.id = -1;
    this.view = {
      name: "",
      author: "",
      description: ""
    };
  }

  get Id() { return this.id; }
  get Recipe() { return this.view }

  init = (id: number, view: RecipeWidgetView): void => {
    this.id = id;
    this.view = view;
  }

  onClickHandler = () => {
    console.log("oh yeah");
  }
}
