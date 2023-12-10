import React from 'react'
import {useModalGeneralForPublic, Returned} from '../useModalGeneralForPublic'

export const useDrawerPublic = <T extends Record<string, any> = any>(Component: React.FC<T>, queryName?: string): Returned<T> => {
    const {open} = useModalGeneralForPublic(Component, 'drawer', queryName)
    return {open}
}
