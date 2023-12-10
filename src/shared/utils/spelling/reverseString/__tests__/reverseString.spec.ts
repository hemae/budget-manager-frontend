import { reverseString } from '../reverseString';

const string = 'string';
const expected = 'gnirts';

describe('reverseString function', () => {
    it('reverseString', () => {
        expect(reverseString(string)).toBe(expected);
    });
});
