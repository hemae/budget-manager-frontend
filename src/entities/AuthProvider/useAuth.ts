import {useContext} from 'react'
import {AuthContext, IAuthContext} from './AuthContext'

export const useAuth = () => useContext<IAuthContext>(AuthContext)
