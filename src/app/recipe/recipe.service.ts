import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Chicken Tikka Masala',
      'spicy, meat, indian',
      'https://www.allrecipes.com/thmb/1ul-jdOz8H4b6BDrRcYOuNmJgt4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/239867chef-johns-chicken-tikka-masala-ddmfs-3X4-0572-e02a25f8c7b745459a9106e9eb13de10.jpg',
      [
        new Ingredient('Tomato', 2),
        new Ingredient('Onion', 1),
        new Ingredient('Garlic', 2),
        new Ingredient('Chicken Breast', 2),
      ]
    ),
    new Recipe(
      'Spaghetti Bolognese',
      'italian, meat, pasta',
      'https://www.malteskitchen.de/wp-content/uploads/2014/05/spaghetti-bolognese-1266.jpg',
      [
        new Ingredient('Tomato', 2),
        new Ingredient('Onion', 1),
        new Ingredient('Garlic', 2),
        new Ingredient('Tomato Sauce', 500),
        new Ingredient('minced Beef', 500),
      ]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor() {}
}
