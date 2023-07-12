import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent {
  @Input() recipeDetail: Recipe;

  constructor(private slService: ShoppingListService) {}

  onAddToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredientList(ingredients);
  }
}
