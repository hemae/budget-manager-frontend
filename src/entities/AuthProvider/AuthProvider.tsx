import React, {useState} from 'react'
import {AuthContext, IAuthContext} from './AuthContext'
import {UserResponse} from '@shared/api'
import jsCookie from 'js-cookie'
import {tokenCookieFieldName} from './lib'

export const AuthProvider: React.FC<React.PropsWithChildren> = ({children}) => {

    const [user, setUser] = useState<UserResponse | null>(null)

    const logout = () => {
        setUser(null)
        jsCookie.remove(tokenCookieFieldName)
    }

    const value: IAuthContext = {
        user,
        setUser,
        logout,
    }

    return (
        <AuthContext.Provider
            value={value}
        >
            {children}
        </AuthContext.Provider>
    )
}
