import { mapEnumToArray } from '../mapEnumToArray';

enum TestedEnum {
    prop_1 = 'prop_1',
    prop_2 = 'prop_2',
}

const expected = [TestedEnum.prop_1, TestedEnum.prop_2];

describe('mapEnumToArray function', () => {
    it('mapEnumToArray', () => {
        expect(mapEnumToArray(TestedEnum)).toStrictEqual(expected);
    });
});
