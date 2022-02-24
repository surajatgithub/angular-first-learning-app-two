import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../shared/services/recipe.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  selectedRecipeItem?: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.selectedRecipe.subscribe((recipe: Recipe) => {
      this.selectedRecipeItem = recipe;
    });
  }
}
