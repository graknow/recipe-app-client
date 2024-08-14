import { Routes } from '@angular/router';

import { RecipeListComponent } from './pages/recipe-list/recipe-list.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'recipes', component: RecipeListComponent },
];
