export interface Recipe {
    id: string;
    name: string;
    preparationTime: number;
    description?: string;
    picture?: string;
}

export type RecipeDetails = Omit<Recipe, 'id'>;