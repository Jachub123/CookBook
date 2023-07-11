import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Output() detail = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Chicken Tikka Masala',
      'spicy, meat, indian',
      'https://www.allrecipes.com/thmb/1ul-jdOz8H4b6BDrRcYOuNmJgt4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/239867chef-johns-chicken-tikka-masala-ddmfs-3X4-0572-e02a25f8c7b745459a9106e9eb13de10.jpg'
    ),
    new Recipe(
      'Spaghetti Bolognese',
      'italian, meat, pasta',
      'https://www.malteskitchen.de/wp-content/uploads/2014/05/spaghetti-bolognese-1266.jpg'
    ),
  ];
  showDetail(recipeNr: Recipe) {
    this.detail.emit(recipeNr);
  }
  constructor() {}
  ngOnInit() {}
}
