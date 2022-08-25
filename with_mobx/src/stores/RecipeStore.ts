import { makeAutoObservable } from "mobx";
import { recipes } from "../data";
import { Recipe } from '..//@types/Recipe';
import { RootStore } from './RootStore';

export class RecipeStore {
    private readonly rootStore;
    recipes: Recipe[] = [...recipes];

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;

        makeAutoObservable(this);
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
}