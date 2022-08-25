import React, { useContext } from 'react';
import RecipeList from './components/Recipe/RecipeList';
import {
    Typography,
    Container,
    Grid,
    Button,
} from '@mui/material';
import rootStore from './stores/RootStore';
import { getRandomFromArray } from './utils/getRandomFromArray';
import { randoms } from './data';

const App = () => {
    const { recipeStore } = useContext(rootStore);
    return (
        <div className="App">
            <Grid container alignItems="center" justifyContent="space-between" marginBottom={ 5 }>
                <Typography variant={ 'h4' } textAlign="center">
                    Du hast gerade { recipeStore.recipes.length } Rezepte.
                </Typography>
                <Button variant="contained" onClick={ () => recipeStore.addRecipe(getRandomFromArray(randoms)) }>
                    Rezept Hinzufügen
                </Button>
            </Grid>
            <Container>
                <RecipeList />
            </Container>
        </div>
    );
};

export default App;
