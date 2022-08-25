import {
    makeAutoObservable,
    reaction,
} from "mobx";
import { recipes } from "../data";
import { Recipe } from '..//@types/Recipe';
import { RootStore } from './RootStore';

export class RecipeStore {
    private readonly rootStore;
    recipes: Recipe[] = [...recipes];
    selectedRecipe: Recipe | null = null;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;

        makeAutoObservable(this);

        reaction(() => this.recipes,
            (newRecipes) => {
                if (this.selectedRecipe
                    && !newRecipes.find(recipe => recipe.id === this.selectedRecipe?.id)) {
                    this.selectedRecipe = null;
                }
            });
    }

    addRecipe = (recipe: Recipe) => {
        if (this.recipes.find(item => item.id === recipe.id)) {
            return;
        }

        this.recipes = [...this.recipes, recipe];
    };

    removeRecipe = (id: string) => {
        this.recipes = this.recipes.filter((recipe) => recipe.id !== id);
    };

    setSelectedRecipe = (recipe: Recipe | null) => {
        this.selectedRecipe = recipe;
    };
}