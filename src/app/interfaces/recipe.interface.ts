// HTTP Response
export interface RecipeResponse {
  id: number;
  name: string;
  description: string | null;
  author: string | null;
  instructions: string[];
}

// Views for various pages.
export interface RecipeWidgetView {
  name: string;
  author: string | null;
  description: string | null;
}

// Query parameters.
export interface RecipeSingleQuery {
  id: number;
  randomType?: string;
}

export interface RecipeListQuery {

}