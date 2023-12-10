import { parseCookie } from '../parseCookie';
import { Cookie } from '../../interfaces';

const cookieToParse = 'cookie_string=cookie_string;cookie_number=2;cookie_boolean=true;cookie_null=null';

const expected: Cookie = {
    cookie_string: 'cookie_string',
    cookie_number: 2,
    cookie_boolean: true,
    cookie_null: null,
};

describe('parseCookie function', () => {
    it('parseCookie works', () => {
        expect(parseCookie(cookieToParse)).toStrictEqual(expected);
    });
});
