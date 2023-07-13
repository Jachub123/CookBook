import { ShoppingListService } from './shopping-list/shopping-list.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { IngredientComponent } from './shopping-list/ingredient/ingredient.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { DropwdownDirective } from './shared/dropwdown.directive';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeComponent,
    ShoppingListEditComponent,
    IngredientComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    DropwdownDirective,
    RecipeStartComponent,
    NotfoundComponent,
    RecipeEditComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
