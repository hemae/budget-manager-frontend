import {useContext} from 'react'
import {INotifyContext, NotifyContext} from './NotifyContext'

export const useNotify = () => useContext<INotifyContext>(NotifyContext)
