import { Recipe as RecipeDefinition } from '../@types/Recipe';
import {
    Card,
    CardHeader,
    CardMedia,
    Grid,
    CardContent,
    Typography,
} from '@mui/material';

interface Props {
    recipe: RecipeDefinition;
}

const Recipe: React.FC<Props> = ({ recipe }) => {
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
            </Card>
        </Grid>
    );
};

export default Recipe;