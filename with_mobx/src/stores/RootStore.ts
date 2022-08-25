import { createContext } from 'react';
import { RecipeStore } from './RecipeStore';

export class RootStore {
    recipeStore;

    constructor() {
        this.recipeStore = new RecipeStore(this);
    }
}

export default createContext(new RootStore());