import {Cookie} from '../interfaces'

export function combineCookie(cookie: Cookie): string {
    return Object.keys(cookie)
        .filter((key) => cookie[key] !== '')
        .map((key) => `${key}=${cookie[key]}`)
        .join(';')
}
