import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

import { BasicHighlightDirective } from './shared/directives/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './shared/directives/better-highlight/better-highlight.directive';
import { DropdownDirective } from './shared/directives/dropdown/dropdown.directive';

// Assignment 1
import { Assignment1Component } from './assignment1/assignment1.component';
import { GameControlComponent } from './assignment1/game-control/game-control.component';
import { OddComponent } from './assignment1/odd/odd.component';
import { EvenComponent } from './assignment1/even/even.component';

// Assignment 2
import { Assignment2Component } from './assignment2/assignment2.component';
import { ActiveUsersComponents } from './assignment2/active-users/active-users.component';
import { InActiveUsersComponents } from './assignment2/inactive-users/inactive-users.component';
import { UserService } from './shared/services/user.service';
import { CounterService } from './shared/services/counter.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    DropdownDirective,
    Assignment1Component,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    Assignment2Component,
    ActiveUsersComponents,
    InActiveUsersComponents,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [UserService, CounterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
