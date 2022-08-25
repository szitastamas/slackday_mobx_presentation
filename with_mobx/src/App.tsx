import React from 'react';
import RecipeList from './components/Recipe/RecipeList';
import { Container } from '@mui/material';
import HeadLine from './components/HeadLine';

const App = () => {
    return (
        <div className="App">
            <Container>
                <HeadLine />
                <RecipeList />
            </Container>
        </div>
    );
};

export default App;
