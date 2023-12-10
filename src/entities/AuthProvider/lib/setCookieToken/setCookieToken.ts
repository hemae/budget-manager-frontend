import jsCookie from 'js-cookie'
import {tokenCookieFieldName} from '../constants'

export function setCookieToken(jwt: string) {
    jsCookie.set(tokenCookieFieldName, jwt)
}
