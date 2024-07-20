import { MessageService } from './../message.service';
// import { RECIPES } from './../mock-recipes';
import { Component , Directive } from '@angular/core';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { RecipeDetailComponent } from '../recipe-detail/recipe-detail.component';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';
@Component({
    standalone: true,
    imports: [
        NgFor, 
        CommonModule, 
        FormsModule,
        UpperCasePipe,
        NgIf,
        RecipeDetailComponent
    ],
    selector: 'recipes',
    //providers: [RecipeService],
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css'],
    // template: `
    //     <h2>{{ getTitle() }}</h2>
    //     <ul>
    //         <li *ngFor="let recipe of recipes">
    //             {{ recipe }}
    //         </li>
    //     </ul>
    // `
})

export class RecipesComponent {
    //title = "List of recipes";
    // recipes = RECIPES;
    recipes: Recipe[] = [];

    // constructor(service: RecipesService) {
    //     let service = new RecipesService();
    //     this.recipes = service.getCourses();
    // }

    constructor(private recipeService: RecipeService, private messageService: MessageService) {
    }

    // recipe: Recipe = {
    //     id: 1,
    //     name: 'Rustic Sourdough Loaf'
    // }

    selectedRecipe?: Recipe;
    onSelect(recipe: Recipe): void {
        this.selectedRecipe = recipe;
        this.messageService.add(`RecipesComponent: Selected recipe id=${recipe.id}`);
    }

    // getRecipes(): void {
    //     this.recipes = this.recipeService.getRecipes();
    // }

    getRecipes(): void {
        this.recipeService.getRecipes()
            .subscribe(recipes => this.recipes = recipes);
    }

    ngOnInit(): void {
        this.getRecipes();
    }

    // getTitle() {
    //     return this.title;
    // }
}