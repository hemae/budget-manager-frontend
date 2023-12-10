import { getPluralForm } from '../getPluralForm';

const dataForTest: [string, string][] = [
    ['word', 'words'],
    ['lady', 'ladies'],
    ['bus', 'buses'],
];

describe('getPluralForm function', () => {
    it('getPluralForm works', () => {
        dataForTest.forEach((pair) => {
            expect(getPluralForm(pair[0])).toBe(pair[1]);
        });
    });
});
