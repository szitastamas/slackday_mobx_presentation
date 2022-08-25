import { Recipe } from './@types/Recipe';
import { v4 } from 'uuid';

export const recipes: Recipe[] = [
    {
        id: v4(),
        name: 'Goulash Suppe',
        description: 'Die beste Suppe der Welt!',
        preparationTime: 180,
        picture: 'https://images.pexels.com/photos/8601391/pexels-photo-8601391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: v4(),
        name: 'Spaghetti Bolognese',
        description: 'Der Klassiker',
        preparationTime: 40,
        picture: 'https://images.pexels.com/photos/7218637/pexels-photo-7218637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: v4(),
        name: 'Schnitzel',
        description: 'Das beste Sonntagessen',
        preparationTime: 30,
        picture: 'https://images.pexels.com/photos/1352270/pexels-photo-1352270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
]

export const randoms: Recipe[] = [
    {
        id: v4(),
        name: 'Palatschinken',
        description: 'Der Lieblingsdessert der Kinder',
        preparationTime: 20,
        picture: 'https://images.pexels.com/photos/264727/pexels-photo-264727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: v4(),
        name: 'Zwiebelcremesuppe',
        description: 'Direkt aus der Kantine',
        preparationTime: 60,
        picture: 'https://images.pexels.com/photos/1707270/pexels-photo-1707270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: v4(),
        name: 'Bratwurst',
        description: 'Der Superstar der deutschen Märkte',
        preparationTime: 30,
        picture: 'https://images.pexels.com/photos/4551907/pexels-photo-4551907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
]