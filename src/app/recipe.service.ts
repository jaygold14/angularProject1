import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { RECIPES } from './mock-recipes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  // getRecipes(): Recipe[] {
  //   return RECIPES;
  // }
  constructor(private messageService: MessageService) { }

  getRecipes(): Observable<Recipe[]> {
    const recipes = of(RECIPES);
    this.messageService.add('RecipeService: fetched recipes');
    return recipes;
  }

}
