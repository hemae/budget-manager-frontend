import {Suspense} from 'react'
import {ReactHOC} from '@shared/react'
import {SuspenseLoader} from './components'

export const withSuspense: ReactHOC = (Component) => {
    return (props) => {
        return (
            <Suspense fallback={<SuspenseLoader/>}>
                <Component {...props}/>
            </Suspense>
        )
    }
}
