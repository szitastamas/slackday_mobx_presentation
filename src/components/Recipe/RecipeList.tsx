import { Recipe as RecipeDefinition } from '../..//@types/Recipe';
import React from 'react';
import { Grid } from '@mui/material';
import Recipe from './Recipe';

interface Props {
    recipes: RecipeDefinition[];
}

const RecipeList: React.FC<Props> = ({ recipes }) => {
    return (
        <Grid container>
            <Grid className="recipe-grid" container spacing={ 2 }>
                { recipes.map(recipe => <Recipe key={ recipe.id } recipe={ recipe } />) }
            </Grid>
        </Grid>
    );
};

export default RecipeList;