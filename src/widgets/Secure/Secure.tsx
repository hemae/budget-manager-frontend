import React from 'react'
import {useAsyncData} from '@shared/react'
import {getToken} from './api'
import {useAuth, setCookieToken} from '@entities/AuthProvider'
import {Authenticating, AuthForm} from './components'

export const Secure: React.FC<React.PropsWithChildren> = ({children}) => {

    const {
        user,
        setUser,
    } = useAuth()

    const {
        loading,
    } = useAsyncData(async () => {
        const {jwt, ...user} = await getToken()
        setCookieToken(jwt)
        setUser(user)
    }, null, [])

    if (loading && !user) return <Authenticating/>

    if (!user) return <AuthForm/>

    return <>{children}</>
}
