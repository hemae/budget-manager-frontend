import { removeDuplicates } from '../removeDuplicates';

const testedArray = ['1', '2', '2', '1', '3'];
const expected = ['1', '2', '3'];

describe('removeDuplicates function', () => {
    it('removeDuplicates', () => {
        expect(removeDuplicates(testedArray)).toStrictEqual(expected);
    });
});
