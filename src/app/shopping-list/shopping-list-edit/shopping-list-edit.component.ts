import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss'],
})
export class ShoppingListEditComponent {
  name: string;
  amount: number;

  constructor(private slService: ShoppingListService) {}

  addIngredient(name, amount) {
    const ing = new Ingredient(name, amount);

    this.slService.addIngredients(ing);
  }
}
