import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "../../environments/environment";
import { RecipeResponse, RecipeSingleQuery } from "../interfaces/recipe.interface";
import { RecipeBasePath, RecipeSinglePath } from "../constants/server-api.constants";
import { HttpQueryService } from "./http-query.service";
import { RecipeRandom } from "../enums/recipe-random.enum";
import { Observable } from "rxjs";

@Injectable(
  {
    providedIn: "root"
  })
export class RecipeService {
  private recipeUrlBase = environment.serverBaseUrl + RecipeBasePath;
  private recipeUrlSingle = this.recipeUrlBase + RecipeSinglePath;

  constructor(
    private http: HttpClient,
    private queryService: HttpQueryService
  ) {
    
  }

  get RecipeBaseUrl() {
    return this.recipeUrlBase;
  }

  get RecipeSingleUrl() {
    return this.recipeUrlSingle;
  }

  getRecpies = (): RecipeResponse[] => {
    console.log(this.queryService.buildRequestWithQuery(this.recipeUrlBase, { test: 1 } ));

    return [];
  }

  getRecipe = (id: number, recipeRandomType?: RecipeRandom): Observable<RecipeResponse> => {
    let query: RecipeSingleQuery = {
      id: id,
      randomType: recipeRandomType?.toString()
    }

    let request = this.queryService.buildRequestWithQuery(this.recipeUrlSingle, query);

    return this.http.get<RecipeResponse>(request);
  }
}