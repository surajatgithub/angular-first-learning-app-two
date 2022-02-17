import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Output('ingredientAdded') ingredientAdded = new EventEmitter<Ingredient>();

  ingredient?: Ingredient = { name: '', amount: 0 };

  constructor() {}

  ngOnInit(): void {}

  addIngredient(ingredient: Ingredient) {
    if (!ingredient.name || !ingredient.amount) {
      return;
    }

    this.ingredientAdded.emit(ingredient);
    this.ingredient = { name: '', amount: 0 };
  }
}
