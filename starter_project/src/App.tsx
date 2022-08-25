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
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const selectedRecipe = data.find(recipe => recipe.id === selectedId);

    const addRecipe = (recipe: Recipe) => {
        if (data.find(item => item.id === recipe.id)) {
            return;
        }

        setData([...data, recipe]);
    };

    const selectRecipe = (id: string) => {
        setSelectedId(id);
    };

    const removeRecipe = (id: string) => {
        if (selectedId === id) {
            setSelectedId(null);
        }

        setData(recipes => recipes.filter((recipe) => recipe.id !== id));
    };

    return (
        <div className="App">
            <Container>
                <HeadLine count={ data.length } onClick={ () => addRecipe(getRandomFromArray(randoms)) } />
                <RecipeList
                    recipes={ data }
                    selectedRecipe={ selectedRecipe }
                    onSelect={ selectRecipe }
                    onRemove={ removeRecipe } />
            </Container>
        </div>
    );
};

export default App;
