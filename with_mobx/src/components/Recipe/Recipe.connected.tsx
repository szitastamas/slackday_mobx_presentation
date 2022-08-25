import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import Recipe from './Recipe';
import rootStore from '../..//stores/RootStore';
import { Recipe as RecipeDefinition } from '../..//@types/Recipe';

interface Props {
    recipe: RecipeDefinition;
}

const RecipeConnected: React.FC<Props> = ({ recipe }) => {
    const {
        recipeStore: {
            selectedRecipe,
            setSelectedRecipe,
            removeRecipe,
        },
    } = useContext(rootStore);

    return <Recipe
        recipe={ recipe }
        selected={ selectedRecipe?.id === recipe.id }
        selectSelf={ () => setSelectedRecipe(recipe) }
        removeSelf={ () => removeRecipe(recipe.id) }
    />;
};

export default observer(RecipeConnected);