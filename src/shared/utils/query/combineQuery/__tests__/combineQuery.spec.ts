import { combineQuery } from '../combineQuery';
import { Query } from '../../interfaces';

const queryToCombine: Query = {
    query_string: 'query_string',
    query_number: 2,
    query_boolean: true,
    query_null: null,
};

const expectedQueryString = '?query_string=query_string&query_number=2&query_boolean=true&query_null=null';

describe('combineQuery function', () => {
    it('combineQuery works', () => {
        expect(combineQuery(queryToCombine)).toBe(expectedQueryString);
    });
});
