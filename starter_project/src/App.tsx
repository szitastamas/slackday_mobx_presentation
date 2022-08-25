import React, { useState } from 'react';
import RecipeList from './components/Recipe/RecipeList';
import {
    recipes,
    randoms,
} from './data';
import { Recipe } from './@types/Recipe';
import { Container } from '@mui/material';
import { getRandomFromArray } from './utils/getRandomFromArray';
import HeadLine from './components/HeadLine';

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

    return (
        <div className="App">
            <Container>
                <HeadLine count={ data.length } onClick={ () => addRecipe(getRandomFromArray(randoms)) } />
                <RecipeList recipes={ data } onRemove={ removeRecipe } />
            </Container>
        </div>
    );
};

export default App;
