import { getRandomElementFromArray } from '../getRandomElementFromArray';

const tested = [
    'apple',
    'banana',
    'orange',
    'grape',
    'kiwi',
    'melon',
    'cherry',
    'lemon',
    'strawberry',
    'pineapple',
    'peach',
    'watermelon',
    'blueberry',
    'mango',
    'pear',
    'plum',
    'apricot',
    'raspberry',
    'blackberry',
    'papaya',
];

describe('getRandomElementFromArray function', () => {
    it('getRandomElementFromArray works', () => {
        expect(tested.includes(getRandomElementFromArray(tested))).toBe(true);
    });
});
