import { RecipeStore } from './RecipeStore';

const mockRootStore = {
    recipeStore: 'recipeStore',
};

const recipe = { id: '1', name: 'recipe' };

const setup = () => new RecipeStore(mockRootStore);

describe('RecipeStore', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('addRecipe()', () => {
        it('adds a new recipe if not yet in the list', () => {
            const store = setup();

            store.addRecipe(recipe);

            expect(store.recipes).toHaveLength(4);
        });

        it('does not add the same recipe twice', () => {
            const store = setup();

            store.addRecipe(recipe);
            store.addRecipe(recipe);

            expect(store.recipes).toHaveLength(4);
        });
    });

    describe('removeRecipe()', () => {
        it('deletes the selected recipe', () => {
            const store = setup();

            store.addRecipe(recipe);
            store.removeRecipe(recipe.id);

            expect(store.recipes).toHaveLength(3);
        });
    });

    describe('setSelectedRecipe()', () => {
        it('sets the selected recipe', () => {
            const store = setup();

            store.addRecipe(recipe);
            store.setSelectedRecipe(recipe);

            expect(store.selectedRecipe).toEqual(recipe);
        })
    })

    describe('reaction()', () => {
        it('sets selected recipe to null if it was selected and removed', () => {
            const store = setup();

            store.addRecipe(recipe);
            store.setSelectedRecipe(recipe);
            store.removeRecipe(recipe.id);

            expect(store.selectedRecipe).toEqual(null);
        });
    });
});