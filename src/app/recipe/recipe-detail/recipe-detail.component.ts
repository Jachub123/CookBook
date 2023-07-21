import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

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
    private recipeService: RecipeService,
    private dsService: DataStorageService
  ) {}

  onAddToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredientList(ingredients);
  }

  unaffirmedDelete() {
    this.recipeService.sure.next(false);
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
    this.dsService.storeRecipes();
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
