import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import { RecipeService } from '../recipe/recipe.service';

@Directive({
  selector: '[appAffirmationWarning]',
})
export class AffirmationWarningDirective implements OnInit {
  @HostListener('click') affirmation() {
    if (this.button.nativeElement.cancel) {
      if (!this.button.nativeElement.cancel.dirty) {
        this.recipeService.onCancel();
      } else {
        this.recipeService.sure.next(false);
      }
    } else {
      this.recipeService.sure.next(false);
    }
  }

  ngOnInit() {}

  constructor(
    private recipeService: RecipeService,
    private button: ElementRef
  ) {}
}
