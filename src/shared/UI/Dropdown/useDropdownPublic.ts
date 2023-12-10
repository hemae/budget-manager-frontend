import React, {Dispatch, SetStateAction, useCallback, useState} from 'react'
import {DropdownOptions} from './interfaces'

interface Returned {
    dropdownShown: boolean
    setDropdownShown: Dispatch<SetStateAction<boolean>>
    dropDownToggle: () => void
    dropdownOptions: DropdownOptions
    onDropdown: boolean
}

export function useDropdownPublic(): Returned {

    const [dropdownShown, setDropdownShown] = useState<boolean>(false)
    const [onDropdown, setOnDropdown] = useState<boolean>(false)

    const dropDownToggle = useCallback(() => {
        setDropdownShown(prev => !prev)
    }, [setDropdownShown])

    const onDropDownMouseOver: React.MouseEventHandler = () => {
        setOnDropdown(true)
    }

    const onDropdownMouseLeave: React.MouseEventHandler = () => {
        setOnDropdown(false)
    }

    return {
        dropDownToggle,
        dropdownShown,
        setDropdownShown,
        onDropdown,
        dropdownOptions: {
            dropDownToggle,
            dropdownShown,
            setDropdownShown,
            onDropDownMouseOver,
            onDropdownMouseLeave
        }
    }
}
