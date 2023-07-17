import { Component } from '@angular/core';
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
export class RecipeDetailComponent {
  recipeDetail: Recipe;
  id: number;

  constructor(
    private slService: ShoppingListService,
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {}

  onAddToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredientList(ingredients);
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
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
  }
}
