import { Ingredient } from './../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Onions', 5),
    new Ingredient('Tomato', 7),
  ];
  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredientList(ingredient: Ingredient[]) {
    this.ingredients.push(...ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  constructor() {}
}
