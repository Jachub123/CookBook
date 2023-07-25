import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  recipeDetail: Recipe;
  id: number;
  sure: boolean = true;

  constructor(
    private slService: ShoppingListService,
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {}

  onAddToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredientList(ingredients);
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      if (this.recipeService.getRecipe(this.id) !== undefined) {
        this.recipeDetail = this.recipeService.getRecipe(this.id);
      } else {
        this.router.navigate(['not-found'], { relativeTo: this.route });
      }
    });
    this.recipeService.sure.subscribe((sure: boolean) => {
      this.sure = sure;
    });
  }
}
