import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: ingredient[] = [
    new ingredient('Onions', 5),
    new ingredient('Tomato', 7),
  ];

  constructor() {}

  addIngredient(ingredients: { name: string; amount: number }) {
    this.ingredients.push(new ingredient(ingredients.name, ingredients.amount));
  }

  ngOnInit() {}
}
