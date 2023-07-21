import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../recipe/recipe.service';

@Component({
  selector: 'app-are-you-sure',
  templateUrl: './are-you-sure.component.html',
  styleUrls: ['./are-you-sure.component.scss'],
})
export class AreYouSureComponent implements OnInit {
  @Input('del') del: boolean = false;
  @Input('cancel') cancel: boolean = false;
  @Input('ingredient') ingredient: boolean = false;

  message: string;
  constructor(private recipeService: RecipeService) {}
  ngOnInit() {
    this.confirmation();
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

  unsure() {
    this.recipeService.sure.next(true);
  }
}
