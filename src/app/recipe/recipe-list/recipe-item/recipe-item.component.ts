import { RecipeService } from './../../recipe.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Input() recipeNr: number;
  constructor(private recipeService: RecipeService) {}
  viewDetail() {
    this.recipeService.recipeSelected.emit;
  }
}
