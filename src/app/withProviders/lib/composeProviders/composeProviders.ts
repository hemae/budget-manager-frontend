import React from 'react'
import {compose} from '@shared/utils'
import {withWrapper} from '@shared/react'

export function composeProviders(...providers: React.FC[]) {
    return compose(...(providers.map(provider => withWrapper(provider))))
}
