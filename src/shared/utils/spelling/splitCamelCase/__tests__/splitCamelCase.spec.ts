import { splitCamelCase } from '../splitCamelCase';

const tested = 'splitCamelCase';
const expectedNonCapitalized = 'split camel case';
const expectedCapitalizedFirstWord = 'Split camel case';
const expectedCapitalizedEveryWord = 'Split Camel Case';

describe('splitCamelCase function', () => {
    it('splitCamelCase | Non Capitalized', () => {
        expect(splitCamelCase(tested)).toBe(expectedNonCapitalized);
    });

    it('splitCamelCase | Capitalized First Word', () => {
        expect(splitCamelCase(tested, 'start')).toBe(expectedCapitalizedFirstWord);
    });

    it('splitCamelCase | Capitalized Every Word', () => {
        expect(splitCamelCase(tested, 'every-word')).toBe(expectedCapitalizedEveryWord);
    });
});
