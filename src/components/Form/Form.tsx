import { RecipeDetails } from '../../@types/Recipe';
import {
    Fragment,
    useState,
} from 'react';
import {
    Typography,
    FormControl,
    FilledInput,
} from '@mui/material';

interface Props {
    details?: RecipeDetails,
    onAdd: (details: RecipeDetails) => void;
    onDelete: (id: string) => void;
}

const Form: React.FC<Props> = ({ details, onAdd, onDelete }) => {
    const isEditMode = !!details;

    const [data, setData] = useState<RecipeDetails>({
        name: details?.name ?? '',
        description: details?.description ?? '',
        preparationTime: details?.preparationTime ?? 0,
        picture: '',
    });
    return (
        <Fragment>
            <Typography>
                Rezept { isEditMode ? 'Aktualisieren' : 'Hinzufügen' }
            </Typography>
            <FormControl variant="filled">
                <FilledInput id="name" />
            </FormControl>
        </Fragment>
    );
};

export default Form;