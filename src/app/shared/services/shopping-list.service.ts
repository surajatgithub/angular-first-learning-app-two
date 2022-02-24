import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredientListRefreshedEvent = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(new Ingredient(ingredient.name, ingredient.amount));
    this.ingredientListRefreshedEvent.emit(this.getIngredients());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientListRefreshedEvent.emit(this.getIngredients());
  }
}