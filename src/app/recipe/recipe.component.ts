import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
  providers: [],
})
export class RecipeComponent {
  viewRecipeDetail: Recipe;

  constructor(private dsService: DataStorageService) {}

  ngOnInit() {
    this.dsService.fetchRecipes().subscribe();
  }
}
