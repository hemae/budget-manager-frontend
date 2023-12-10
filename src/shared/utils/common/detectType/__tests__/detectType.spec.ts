import { detectType } from '../detectType';

const dataForTest: [string, string | number | true | false | null][] = [
    ['1', 1],
    ['string', 'string'],
    ['', ''],
    ['true', true],
    ['false', false],
    ['null', null],
];

describe('detectType function', () => {
    it('detectType works', () => {
        dataForTest.forEach((pair) => {
            expect(detectType(pair[0])).toBe(pair[1]);
        });
    });
});
