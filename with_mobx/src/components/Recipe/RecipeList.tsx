import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Grid } from '@mui/material';
import Recipe from './Recipe';
import rootStore from '../..//stores/RootStore';

const RecipeList: React.FC = () => {
    const { recipeStore } = useContext(rootStore);

    return (
        <Grid container>
            <Grid className="recipe-grid" container spacing={ 2 }>
                { recipeStore.recipes.map(recipe => (
                    <Recipe
                        key={ recipe.id }
                        recipe={ recipe }
                    />)) }
            </Grid>
        </Grid>
    );
};

export default observer(RecipeList);