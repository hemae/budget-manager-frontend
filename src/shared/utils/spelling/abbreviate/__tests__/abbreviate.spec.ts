import { abbreviate } from '../abbreviate';

const tested = 'Phrase for Abbreviate';
const expected = 'PFA';

describe('abbreviate function', () => {
    it('abbreviate works', () => {
        expect(abbreviate(tested)).toBe(expected);
    });
});
