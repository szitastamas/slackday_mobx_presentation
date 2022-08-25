import { Recipe as RecipeDefinition } from '../..//@types/Recipe';
import {
    Card,
    CardHeader,
    CardMedia,
    Grid,
    CardContent,
    Typography,
    CardActions,
    Button,
} from '@mui/material';
import { useContext } from 'react';
import rootStore from '../../stores/RootStore';
import { observer } from 'mobx-react-lite';

interface Props {
    recipe: RecipeDefinition;
}

const Recipe: React.FC<Props> = ({ recipe }) => {
    const { recipeStore } = useContext(rootStore);
    return (
        <Grid item xs={ 4 }>
            <Card data-selected={ recipeStore.selectedRecipe?.id === recipe.id }
                  raised={ recipeStore.selectedRecipe?.id === recipe.id }>
                <CardHeader
                    title={ recipe.name }
                    subheader={ `${ recipe.preparationTime } Minuten` }
                    onClick={ () => recipeStore.setSelectedRecipe(recipe) }
                />
                <CardMedia component="img" height="175" src={ recipe.picture } />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        { recipe.description }
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        color="error"
                        variant="outlined"
                        onClick={ () => recipeStore.removeRecipe(recipe.id) }>
                        Entfernen
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default observer(Recipe);