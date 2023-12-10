import { getSingleForm } from '../getSingleForm';

const dataForTest: [string, string][] = [
    ['words', 'word'],
    ['ladies', 'lady'],
    ['buses', 'bus'],
];

describe('getSingleForm function', () => {
    it('getSingleForm works', () => {
        dataForTest.forEach((pair) => {
            expect(getSingleForm(pair[0])).toBe(pair[1]);
        });
    });
});
