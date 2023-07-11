import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
  providers: [RecipeService],
})
export class RecipeComponent {
  viewRecipeDetail: Recipe;

  constructor(private recipeService: RecipeService) {}

  passDetail(recipeNr: Recipe) {
    this.viewRecipeDetail = recipeNr;
  }
}
