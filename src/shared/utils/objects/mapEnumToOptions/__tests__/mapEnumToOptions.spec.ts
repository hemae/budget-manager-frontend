import { SelectOption } from '@shared/UI';
import { mapEnumToOptions } from '../mapEnumToOptions';

enum TestedEnum {
    prop_1 = 'prop_1',
    prop_2 = 'prop_2',
}

const expected: SelectOption[] = [
    { value: 'prop_1', label: 'prop_1' },
    { value: 'prop_2', label: 'prop_2' },
];

describe('mapEnumToOptions function', () => {
    it('mapEnumToOptions', () => {
        expect(mapEnumToOptions(TestedEnum)).toStrictEqual(expected);
    });
});
