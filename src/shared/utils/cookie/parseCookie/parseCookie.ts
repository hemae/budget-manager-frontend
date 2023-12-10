import { detectType } from '../../common';
import { Cookie } from '../interfaces';

export function parseCookie(cookieString?: string): Cookie {
    if (!cookieString) return {};
    const target = {};
    cookieString
        .split(';')
        .map((stringPair) => stringPair.trim().split('='))
        .map((pairElement) => [pairElement[0], detectType(pairElement[1])])
        // @ts-ignore
        .forEach((pair) => (target[pair[0].toString()] = pair[1]));
    return target;
}
