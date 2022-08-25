import React, { useState } from 'react';
import RecipeList from './components/Recipe/RecipeList';
import { recipes } from './data';
import { Recipe } from './@types/Recipe';
import { v4 } from 'uuid';
import {
    Typography,
    Container,
    Grid,
    Button,
} from '@mui/material';

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
            <Grid container alignItems="center" justifyContent="space-between" marginBottom={ 5 }>
                <Typography variant={ 'h4' } textAlign="center">
                    Du hast gerade { data.length } Rezepte.
                </Typography>
                <Button variant="contained">
                    Rezept Hinzufügen
                </Button>
            </Grid>
            <Container>
                <RecipeList recipes={ data } />
            </Container>
        </div>
    );
};

export default App;
