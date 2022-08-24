import React, { useState } from 'react';
import RecipeList from './components/Recipe/RecipeList';
import { recipes } from './data';
import { Recipe } from './@types/Recipe';
import { v4 } from 'uuid';
import {
    Typography,
    Grid,
    Container,
} from '@mui/material';
import Form from './components/Form/Form';

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
            <Typography variant={ 'h4' } marginBottom={ 5 } textAlign='center'>
                Du hast gerade { data.length } Rezepte.
            </Typography>
            <Grid container>
                <Grid item xs={ 8 }>
                    <Container>
                        <RecipeList recipes={ data } />
                    </Container>
                </Grid>
                <Grid item xs={ 4 }>
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
