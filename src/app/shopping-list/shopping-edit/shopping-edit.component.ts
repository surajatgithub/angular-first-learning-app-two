import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  ingredient?: Ingredient = { name: '', amount: 0 };

  constructor(private soppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  addIngredient(ingredient: Ingredient) {
    if (!ingredient.name || !ingredient.amount) {
      return;
    }

    this.soppingListService.addIngredient(ingredient);
    this.ingredient = { name: '', amount: 0 };
  }
}
