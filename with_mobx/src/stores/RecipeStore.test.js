import { RecipeStore } from './RecipeStore';

const mockRootStore = {
    recipeStore: 'recipeStore',
};

const setup = () => new RecipeStore(mockRootStore);

describe('RecipeStore', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('addRecipe()', () => {
        it('adds a new recipe if not yet in the list', () => {
            const store = setup();

            store.addRecipe({ name: 'new recipe' });

            expect(store.recipes).toHaveLength(4);
        });

        it('does not add the same recipe twice', () => {
            const store = setup();

            store.addRecipe({ id: '1' });
            store.addRecipe({ id: '1' });

            expect(store.recipes).toHaveLength(4);
        });
    });

    describe('removeRecipe()', () => {
        it('deletes the selected recipe', () => {
            const store = setup();

            store.addRecipe({ id: '1' })
            store.removeRecipe('1');

            expect(store.recipes).toHaveLength(3);
        })
    })
});