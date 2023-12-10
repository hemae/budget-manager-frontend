import { capitalize } from '../capitalize';

const tested = 'word';
const expected = 'Word';

describe('capitalize function', () => {
    it('capitalize works', () => {
        expect(capitalize(tested)).toBe(expected);
    });
});
