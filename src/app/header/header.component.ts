import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() recipeClicked = new EventEmitter<string>();
  @Output() listClicked = new EventEmitter<string>();

  switchView(view: string) {
    this.recipeClicked.emit(view);
  }
}
