import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RecipeService } from 'src/app/recipe/recipe.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss'],
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  sure: boolean = true;

  constructor(
    private slService: ShoppingListService,
    private recipeService: RecipeService
  ) {}

  addIngredient(form: NgForm) {
    const value = form.value;
    const ing = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex, ing);
    } else {
      this.slService.addIngredients(ing);
    }
    this.editMode = false;
    form.reset();
  }

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.slService.getIngredient(index);

        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
    this.recipeService.sure.subscribe((sure: boolean) => {
      this.sure = sure;
    });
  }

  unaffirmedDelete() {
    this.recipeService.sure.next(false);
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete() {
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
    this.sure = true;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
