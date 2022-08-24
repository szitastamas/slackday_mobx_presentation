import { Recipe as RecipeDefinition } from '../..//@types/Recipe';
import { Fragment } from 'react';
import {
    Container,
    Grid,
    Typography,
} from '@mui/material';
import Recipe from './Recipe';

interface Props {
    recipes: RecipeDefinition[];
}

const RecipeList: React.FC<Props> = ({ recipes }) => {
    return (
        <Container>
            <Typography variant={ 'h4' } marginBottom={ 5 }>
                Du hast gerade { recipes.length } Rezepte.
            </Typography>
            <Grid className="recipe-grid" container spacing={ 2 }>
                { recipes.map(recipe => <Recipe key={ recipe.id } recipe={ recipe } />) }
            </Grid>
        </Container>
    );
};

export default RecipeList;