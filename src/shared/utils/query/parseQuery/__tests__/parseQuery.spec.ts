import { parseQuery } from '../parseQuery';
import { Query } from '../../interfaces';

const queryToParse = '?query_string=query_string&query_number=2&query_boolean=true&query_null=null';

const expected: Query = {
    query_string: 'query_string',
    query_number: 2,
    query_boolean: true,
    query_null: null,
};

describe('parseQuery function', () => {
    it('parseQuery works', () => {
        expect(parseQuery(queryToParse)).toStrictEqual(expected);
    });
});
