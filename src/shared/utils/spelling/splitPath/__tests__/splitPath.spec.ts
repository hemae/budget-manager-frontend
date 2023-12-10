import { splitPath } from '../splitPath';

const tested = '/test-1/test-2/test-3/test-4/';
const expected = ['test-1', 'test-2', 'test-3', 'test-4'];

describe('splitPath function', () => {
    it('splitPath works', () => {
        expect(splitPath(tested)).toStrictEqual(expected);
    });
});
