import {combineCookie} from '../combineCookie'
import {parseCookie} from '../parseCookie'

export function setCookie(fieldName: string, cookieValue: string | number | boolean | null) {
    const existedCookies = parseCookie(document.cookie)
    existedCookies[fieldName] = cookieValue !== null ? cookieValue.toString() : 'null'
    document.cookie = combineCookie(existedCookies)
}
