import React, { useState } from 'react';
import RecipeList from './components/Recipe/RecipeList';
import {
    recipes,
    randoms,
} from './data';
import { Recipe } from './@types/Recipe';
import {
    Typography,
    Container,
    Grid,
    Button,
} from '@mui/material';

const App = () => {

    const [data, setData] = useState(recipes);

    const addRecipe = (recipe: Recipe) => {
        if (data.find(item => item.id === recipe.id)) {
            return;
        }

        setData([...data, recipe]);
    };

    const removeRecipe = (id: string) => {
        setData(recipes => recipes.filter((recipe) => recipe.id !== id));
    };

    const getRandomRecipe = () => {
        const rng = Math.floor(Math.random() * randoms.length);
        return randoms[rng];
    };

    return (
        <div className="App">
            <Grid container alignItems="center" justifyContent="space-between" marginBottom={ 5 }>
                <Typography variant={ 'h4' } textAlign="center">
                    Du hast gerade { data.length } Rezepte.
                </Typography>
                <Button variant="contained" onClick={ () => addRecipe(getRandomRecipe()) }>
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
