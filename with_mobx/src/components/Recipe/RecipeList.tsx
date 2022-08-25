import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Grid } from '@mui/material';
import rootStore from '../..//stores/RootStore';
import RecipeConnected from './Recipe.connected';

const RecipeList: React.FC = () => {
    const { recipeStore } = useContext(rootStore);

    return (
        <Grid container>
            <Grid className="recipe-grid" container spacing={ 2 }>
                { recipeStore.recipes.map(recipe => (
                    <RecipeConnected
                        key={ recipe.id }
                        recipe={ recipe }
                    />)) }
            </Grid>
        </Grid>
    );
};

export default observer(RecipeList);