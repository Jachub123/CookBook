import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent {
  viewRecipeDetail: Recipe;

  passDetail(recipeNr: Recipe) {
    this.viewRecipeDetail = recipeNr;
  }
}
