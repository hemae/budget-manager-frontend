import { generateArray } from '../generateArray';
import { Generator } from '../interfaces';

const generator: Generator = (index) => {
    return index * 2;
};

const numberOfElements = 3;
const expected = [0, 2, 4];

describe('generateArray function', () => {
    it('generateArray works', () => {
        const generated = generateArray(numberOfElements, generator);
        expect(generated).toHaveLength(numberOfElements);
        expect(generated).toStrictEqual(expected);
    });
});
