import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes:any;

  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {

    this.recipes = this.recipeService.getRecipes()
    // console.log(this.recipes)
    // console.log(this.recipes)
    // console.log(this.recipeService.getRecipes())
  }

}
