import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
  providers: [],
})
export class RecipeComponent {
  viewRecipeDetail: Recipe;

  constructor() {}

  ngOnInit() {}
}
