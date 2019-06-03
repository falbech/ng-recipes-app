import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
       'Simply a test',
       'http://baliindiancuisine.com/wp-content/uploads/2014/12/Indian-fast-food-recipes.jpg',
       [
         new Ingredient('Meat',1),
         new Ingredient('French Fries', 20)
       ]
    ),
    new Recipe(
      'Another Test Recipe',
       'Simply a test',
       'http://baliindiancuisine.com/wp-content/uploads/2014/12/Indian-fast-food-recipes.jpg',
       [
         new Ingredient('Buns', 2),
         new Ingredient('Meat', 1)
       ]
    )
  ];
  
  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
