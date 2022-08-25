export const getRandomFromArray = <T>(arr: Array<T>) => {
    const rng = Math.floor(Math.random() * arr.length);
    return arr[rng];
};