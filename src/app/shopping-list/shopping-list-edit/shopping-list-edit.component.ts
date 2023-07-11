import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss'],
})
export class ShoppingListEditComponent {
  name: string;
  amount: number;
  ing: { name: string; amount: number };
  @Output() ingredient = new EventEmitter<{ name: string; amount: number }>();

  addIngredient(name: string, amount: number) {
    this.ingredient.emit({ name: name, amount: amount });
  }
}
