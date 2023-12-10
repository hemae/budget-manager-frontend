import React, {MouseEventHandler, useCallback, useEffect, useState} from 'react'
import {useExternalClick} from '../../react'
import {DropdownOptions} from './interfaces'

interface Returned {
    dropdownContentShown: boolean
    elementLeave: MouseEventHandler
    elementOver: MouseEventHandler
}

export function useDropdown(options: DropdownOptions): Returned {

    const {
        dropdownShown,
        setDropdownShown,
        onDropDownMouseOver,
        onDropdownMouseLeave
    } = options

    const [dropdownContentShown, setDropdownContentShown] = useState<boolean>(false)

    useEffect(() => {
        if (dropdownShown) setTimeout(() => setDropdownContentShown(true), 80)
        else setDropdownContentShown(false)
    }, [dropdownShown])

    const hideDropDown = useCallback(() => {
        if (dropdownContentShown) setDropdownShown(false)
    }, [setDropdownShown, dropdownContentShown])

    const {
        elementLeave,
        elementOver
    } = useExternalClick({setElementNonactive: hideDropDown, isElement: true})

    const onMouseOver: React.MouseEventHandler = (event) => {
        onDropDownMouseOver(event)
        elementOver(event)
    }

    const onMouseLeave: React.MouseEventHandler = (event) => {
        onDropdownMouseLeave(event)
        elementLeave(event)
    }

    return {
        dropdownContentShown,
        elementLeave: onMouseLeave,
        elementOver: onMouseOver,
    }
}