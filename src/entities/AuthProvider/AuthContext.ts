import {createContext, Dispatch, SetStateAction} from 'react'
import {UserResponse} from '@shared/api'
import {emptyFunc} from '@shared/react'

export interface IAuthContext {
    user: UserResponse | null
    setUser: Dispatch<SetStateAction<UserResponse | null>>
    logout: () => void
}

export const AuthContext = createContext<IAuthContext>({
    user: null,
    setUser: emptyFunc,
    logout: emptyFunc,
})
