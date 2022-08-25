import { Recipe as RecipeDefinition } from '../../@types/Recipe';
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

interface Props {
    recipe: RecipeDefinition;
    removeSelf: () => void;
}

const Recipe: React.FC<Props> = ({ recipe, removeSelf }) => {
    return (
        <Grid item xs={ 4 }>
            <Card>
                <CardHeader
                    title={ recipe.name }
                    subheader={ `${ recipe.preparationTime } Minuten` }
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
                        onClick={ removeSelf }>
                        Entfernen
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Recipe;