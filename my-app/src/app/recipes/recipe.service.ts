import { EventEmitter, Injectable } from '@angular/core';

// import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
// import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
 

  recipes = [
   {
     name: 'Tasty Schnitzel',
      description:'A super-tasty Schnitzel - just awesome!',
      imagePath: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
},
{
    name: 'Tasty Schnitzel2',
     description:'იჰუუ',
     imagePath: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
},
   
  ];

  constructor() {}

  getRecipes() {
    return this.recipes.slice();
  }

  
  getRecipe(index: number) {
    return this.recipes[index];
  }

//   getRecipe(index: number) {
//     return this.recipes[index];
//   }

//   addIngredientsToShoppingList(ingredients: Ingredient[]) {
//     this.slService.addIngredients(ingredients);
//   }
}
