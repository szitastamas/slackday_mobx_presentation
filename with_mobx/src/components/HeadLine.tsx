import {
    Grid,
    Typography,
    Button,
} from '@mui/material';
import { getRandomFromArray } from '../utils/getRandomFromArray';
import { randoms } from '../data';
import React, { useContext } from 'react';
import rootStore from '../stores/RootStore';

const HeadLine: React.FC = () => {
    const { recipeStore } = useContext(rootStore);
    return (
        <Grid container alignItems="center" justifyContent="space-between" marginBottom={ 5 }>
            <Typography variant={ 'h4' } textAlign="center">
                Du hast gerade { recipeStore.recipes.length } Rezepte.
            </Typography>
            <Button variant="contained" onClick={ () => recipeStore.addRecipe(getRandomFromArray(randoms)) }>
                Rezept Hinzufügen
            </Button>
        </Grid>
    );
};

export default HeadLine;