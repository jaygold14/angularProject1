import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { RECIPES } from './mock-recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  getRecipes(): Recipe[] {
    return RECIPES;
  }
  constructor() { }
}
