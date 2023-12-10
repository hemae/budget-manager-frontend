import {Api} from '../lib'
import {
    AuthenticateBody,
    RegisterBody,
} from './body'
import {
    AuthenticateResponse,
    RegisterResponse,
    TokenResponse,
} from './interfaces'

export class Auth {

    private static _basePath = '/auth'

    public static getMethods(parentPath: string) {
        const basePath = `${parentPath}${Auth._basePath}`
        return {
            postAuthenticate(body: AuthenticateBody) {
                const path = '/authenticate/'
                return Api.post<AuthenticateResponse>({
                    path: `${basePath}${path}`,
                    body,
                })
            },
            postRegister(body: RegisterBody) {
                const path = '/register/'
                return Api.post<RegisterResponse>({
                    path: `${basePath}${path}`,
                    body,
                })
            },
            getToken() {
                const path = '/token/'
                return Api.get<TokenResponse>({
                    path: `${basePath}${path}`,
                })
            }
        }
    }
}
