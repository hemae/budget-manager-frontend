import { getObjectValueByFieldName } from '../getObjectValueByFieldName';

const testedObject = {
    prop_1: {
        prop_1_1: 2,
        prop_1_2: {
            prop_1_2_1: true,
            prop_1_2_2: [
                1,
                {
                    'prop_1_2_2[1]_1': 3,
                },
            ],
        },
    },
    prop_2: 4,
    prop_3: 'string',
    prop_4: [1, 2, 5],
    prop_5: {},
    prop_6: [],
};

const separator = '-';

const expected: [string, any][] = [
    [`prop_1${separator}prop_1_1`, 2],
    [`prop_1${separator}prop_1_2${separator}prop_1_2_1`, true],
    [`prop_1${separator}prop_1_2${separator}prop_1_2_2[1]${separator}prop_1_2_2[1]_1`, 3],
    [`prop_1${separator}prop_1_2${separator}prop_1_2_2[0]`, 1],
    [`prop_2`, 4],
    [`prop_3`, 'string'],
    [`prop_4[2]`, 5],
    [`prop_5.prop_4_1`, undefined],
    [`prop_6[0]`, undefined],
];

describe('getObjectValueByFieldName function', () => {
    it('getObjectValueByFieldName works', () => {
        expected.forEach((pair) => {
            expect(
                getObjectValueByFieldName({
                    object: testedObject,
                    fieldName: pair[0],
                    fieldNameSeparator: separator,
                }),
            ).toBe(pair[1]);
        });
    });
});
