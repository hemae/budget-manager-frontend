import { generateDummyArray } from '../generateDummyArray';

const numberOfElements = 4;
const blank = 'blank';

describe('Generate Dummy Array Function', () => {
    it('Array Was Generated Without Blank', () => {
        const generatedArray = generateDummyArray(numberOfElements);
        expect(generatedArray.length).toBe(numberOfElements);
    });

    it('Array Was Generated With Blank', () => {
        const generatedArray = generateDummyArray(numberOfElements, blank);
        expect(generatedArray.length).toBe(numberOfElements);
        expect(generatedArray.every((el) => el === blank)).toBe(true);
    });
});
