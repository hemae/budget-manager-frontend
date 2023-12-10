export const getRandomElementFromArray = <T = any>(array: T[]): T => {
    return array[Math.floor(Math.random() * array.length)];
};
