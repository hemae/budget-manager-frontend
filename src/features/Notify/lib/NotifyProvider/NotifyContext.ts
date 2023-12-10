import {createContext} from 'react'
import {NotifyOptions} from '../../interfaces'

export interface INotifyContext {
    pushNotification: (options: NotifyOptions) => void
}

export const NotifyContext = createContext<INotifyContext>({
    pushNotification: () => { }
})
