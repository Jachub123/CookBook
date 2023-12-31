import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() recipeClicked = new EventEmitter<string>();
  @Output() listClicked = new EventEmitter<string>();

  constructor(private dsService: DataStorageService) {}

  switchView(view: string) {
    this.recipeClicked.emit(view);
  }

  onSave() {
    this.dsService.storeRecipes();
  }

  onFetchData() {
    this.dsService.fetchRecipes().subscribe();
  }
}
