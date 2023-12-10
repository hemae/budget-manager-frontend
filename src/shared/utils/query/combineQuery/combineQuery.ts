import { Query } from '../interfaces';

export function combineQuery(query: Query): string {
    return encodeURI(
        '?' +
            Object.keys(query)
                .filter((key) => query[key] !== '')
                .map((key) => `${key}=${query[key]}`)
                .join('&'),
    );
}
