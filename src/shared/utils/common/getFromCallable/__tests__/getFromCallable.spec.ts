import { getFromCallable } from '../getFromCallable';

const testedProperty = 'tested property';
const testedPropertyCallback = (testedProperty: string) => testedProperty;

describe('getFromCallable function', () => {
    it('getFromCallable works | just property', () => {
        expect(getFromCallable(testedProperty)).toBe(testedProperty);
    });

    it('getFromCallable works | callback', () => {
        expect(getFromCallable(testedPropertyCallback, testedProperty)).toBe(testedProperty);
    });
});
