import { Recipe as RecipeDefinition } from '../..//@types/Recipe';
import React from 'react';
import { Grid } from '@mui/material';
import Recipe from './Recipe';

interface Props {
    recipes: RecipeDefinition[];
    selectedRecipe: string | null;
    onSelect: (id: string) => void;
    onRemove: (id: string) => void;
}

const RecipeList: React.FC<Props> = ({ recipes, selectedRecipe, onSelect, onRemove }) => {
    return (
        <Grid container>
            <Grid className="recipe-grid" container spacing={ 2 }>
                { recipes.map(recipe => (
                    <Recipe
                        key={ recipe.id }
                        recipe={ recipe }
                        selected={ recipe.id === selectedRecipe }
                        selectSelf={ () => onSelect(recipe.id) }
                        removeSelf={ () => onRemove(recipe.id) }
                    />)) }
            </Grid>
        </Grid>
    );
};

export default RecipeList;