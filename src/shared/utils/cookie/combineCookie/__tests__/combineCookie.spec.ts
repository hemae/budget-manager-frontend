import { combineCookie } from '../combineCookie';
import { Cookie } from '../../interfaces';

const cookieToCombine: Cookie = {
    cookie_string: 'cookie_string',
    cookie_number: 2,
    cookie_boolean: true,
    cookie_null: null,
};

const expectedCookieString = 'cookie_string=cookie_string;cookie_number=2;cookie_boolean=true;cookie_null=null';

describe('combineCookie function', () => {
    it('combineCookie works', () => {
        expect(combineCookie(cookieToCombine)).toBe(expectedCookieString);
    });
});
