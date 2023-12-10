import { parseJSON } from '../parseJSON';

const successCaseJSON = '{"prop_1": true, "prop_2": {"prop_2_1": 4, "prop_2_2": ["1", "2", "3"]}}';
const failCaseJSON = '{"prop_1: true", "prop_2": {"prop_2_1": 4}, "prop_2_2": ["1", "2", "3"]}';

const successExpected = {
    prop_1: true,
    prop_2: {
        prop_2_1: 4,
        prop_2_2: ['1', '2', '3'],
    },
};
const failExpected = null;

describe('parseJSON function', () => {
    it('parseJSON | success case', () => {
        expect(parseJSON(successCaseJSON)).toStrictEqual(successExpected);
    });

    it('parseJSON | fail case', () => {
        expect(parseJSON(failCaseJSON)).toBe(failExpected);
    });
});
