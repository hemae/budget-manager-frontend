import { detectType } from '../../common';
import { Query } from '../interfaces';

export function parseQuery(queryString?: string): Query {
    if (!queryString) return {};
    const target = {};
    decodeURI(queryString)
        .slice(1)
        .split('&')
        .map((stringPair) => stringPair.split('='))
        .map((pairElement) => [pairElement[0], detectType(pairElement[1])])
        // @ts-ignore
        .forEach((pair) => (target[pair[0].toString()] = pair[1]));
    return target;
}
