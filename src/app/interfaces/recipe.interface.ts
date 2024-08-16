export interface RecipeResponse {
  id: number;
  name: string;
  description: string | null;
  author: string | null;
  instructions: string[];
}

export interface RecipeSingleQuery {
  id: number;
  randomType?: string;
}

export interface RecipeListQuery {

}