import React from 'react';
import RecipeList from './components/RecipeList';
import { recipes } from './data';

const App = () => {

    return (
        <div className="App">
            <RecipeList recipes={ recipes } />
        </div>
    );
};

export default App;
