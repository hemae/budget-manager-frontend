import React from 'react'
import {Button} from '@shared/UI'
import {useAuth} from '@entities/AuthProvider'

export const Logout: React.FC = () => {

    const {logout} = useAuth()

    return (
        <Button
            onClick={logout}
        >
            Sign out
        </Button>
    )
}
