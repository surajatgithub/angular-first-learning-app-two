import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { Ingredient } from '../ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {
  public selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Recipe 1',
      'Desc 1',
      'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Recipe 2',
      'Desc 2',
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
    new Recipe(
      'Recipe 3',
      'Desc 3',
      'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Recipe 4',
      'Desc 4',
      'https://images.unsplash.com/photo-1560713781-d00f6c18f388?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1081&q=80',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Recipe 5',
      'Desc 5',
      'https://images.unsplash.com/photo-1604634077373-a279cadc62c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
