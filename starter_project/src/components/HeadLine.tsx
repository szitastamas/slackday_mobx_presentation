import {
    Grid,
    Typography,
    Button,
} from '@mui/material';
import { getRandomFromArray } from '../utils/getRandomFromArray';
import { randoms } from '../data';
import React from 'react';

interface Props {
    count: number;
    onClick: () => void;
}

const HeadLine: React.FC<Props> = ({ count, onClick }) => {
    return (
        <Grid container alignItems="center" justifyContent="space-between" marginBottom={ 5 }>
            <Typography variant={ 'h4' } textAlign="center">
                Du hast gerade { count } Rezepte.
            </Typography>
            <Button variant="contained" onClick={ onClick }>
                Rezept Hinzufügen
            </Button>
        </Grid>
    );
};

export default HeadLine;