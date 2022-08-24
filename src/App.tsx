import React, { useState } from 'react';
import RecipeList from './components/Recipe/RecipeList';
import { recipes } from './data';
import { Recipe } from './@types/Recipe';
import { v4 } from 'uuid';
import Form from './components/Form/Form';
import { Grid } from '@mui/material';

const App = () => {

    const [data, setData] = useState(recipes);

    const addRecipe = (recipeData: Omit<Recipe, 'id'>) => {
        const recipe = {
            ...recipeData,
            id: v4(),
        };

        setData([...data, recipe]);
    };

    const removeRecipe = (id: string) => {
        setData(recipes => recipes.filter((recipe) => recipe.id !== id));
    };

    return (
        <div className="App">
            <Grid container>
                <Grid item xs={ 8 }>
                    <RecipeList recipes={ data } />
                </Grid>
                <Grid item xs={ 2 }>
                    <Form
                        onAdd={ addRecipe }
                        onDelete={ removeRecipe }
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default App;
