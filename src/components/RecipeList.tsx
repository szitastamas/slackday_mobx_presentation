import { Recipe as RecipeDefinition } from '../@types/Recipe';
import { Fragment } from 'react';
import { Grid } from '@mui/material';
import Recipe from './Recipe';

interface Props {
    recipes: RecipeDefinition[];
}

const RecipeList: React.FC<Props> = ({ recipes }) => {

    return (
        <Fragment>
            <h2>Du hast gerade { recipes.length } Rezepte</h2>
            <Grid className="recipe-grid" container spacing={ 2 }>
                { recipes.map(recipe => <Recipe key={ recipe.id } recipe={ recipe } />) }
            </Grid>
        </Fragment>
    );
};

export default RecipeList;