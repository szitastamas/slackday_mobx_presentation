import { Recipe } from '../../@types/Recipe';
import { Fragment } from 'react';
import { Typography } from '@mui/material';

type RecipeDetails = Omit<Recipe, 'id'>;

interface Props {
    details?: RecipeDetails,
    onAdd: (details: RecipeDetails) => void;
    onDelete: (id: string) => void;
}

const Form: React.FC<Props> = ({ details, onAdd, onDelete }) => {
    return (
        <Fragment>
            <Typography>
                Rezept { details ? 'Aktualisieren' : 'Hinzufügen' }
            </Typography>
        </Fragment>
    );
};

export default Form;