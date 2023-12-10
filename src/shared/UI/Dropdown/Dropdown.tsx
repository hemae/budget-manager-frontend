import React from 'react'
import classNames from 'classnames'
import {DropdownProps} from './interfaces'
import {useDropdown} from './useDropdown'
import './Dropdown.scss'

export const Dropdown: React.FC<React.PropsWithChildren<DropdownProps>> = (props) => {

    const {
        dropdownPlacement = 'bottom-left',
        dropdownOptions,
        className,
        children,
    } = props

    const {
        dropdownContentShown,
        elementLeave,
        elementOver,
    } = useDropdown(dropdownOptions)

    return (
        <div
            className={classNames(
                'ui-dropdown',
                dropdownPlacement,
                {shown: dropdownOptions.dropdownShown},
                {contentShown: dropdownContentShown},
                className
            )}
            onMouseOver={elementOver}
            onMouseLeave={elementLeave}
        >
            {children}
        </div>
    )
}
