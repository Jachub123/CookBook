import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { RecipeService } from '../recipe/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { Recipe } from '../recipe/recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-are-you-sure',
  templateUrl: './are-you-sure.component.html',
  styleUrls: ['./are-you-sure.component.scss'],
})
export class AreYouSureComponent implements OnInit {
  @Input('del') del: boolean = false;
  @Input('cancel') cancel: boolean = false;
  @Input('ingredient') ingredient: boolean = false;
  @Input() itemIndex: number;
  @Input() slForm: NgForm;
  recipeDetail: Recipe;
  message: string;
  id: number;

  constructor(
    private router: Router,
    private recipeService: RecipeService,
    private dsService: DataStorageService,
    private route: ActivatedRoute,
    private slService: ShoppingListService
  ) {}

  ngOnInit() {
    this.confirmation();
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      if (this.recipeService.getRecipe(this.id) !== undefined) {
        this.recipeDetail = this.recipeService.getRecipe(this.id);
      } else {
        this.router.navigate(['not-found'], { relativeTo: this.route });
      }
    });
  }

  confirmation() {
    if (this.del) {
      this.message = 'Bist du sicher dass du das Rezept löschen möchtest?';
      return this.message;
    } else if (this.cancel) {
      this.message =
        'Bist du sicher dass du deine Änderungen verwerfen möchtest?';
      return this.message;
    } else if (this.ingredient) {
      this.message = 'Bist du sicher dass du diese Zutat löschen möchtest?';
      return this.message;
    } else {
      return;
    }
  }

  affirm() {
    if (this.cancel) {
      this.recipeService.onCancel();
    } else if (this.del) {
      this.onDeleteRecipe();
    } else {
      this.onDeleteIngredient();
    }
  }

  onDeleteIngredient() {
    this.slService.deleteIngredient(this.itemIndex);
    this.slForm.reset();
    this.recipeService.sure.next(true);
    this.slService.editMode.next(false);
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
    this.dsService.storeRecipes();
  }

  sure() {
    this.recipeService.sure.next(true);
  }
}
