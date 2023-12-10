import React, {useEffect, useState} from 'react'
import {OUT_TRANSITION_TIME} from './constants'
import classNames from 'classnames'
import {turnScroll} from '@shared/utils'
import './Overlay.scss'

interface OverlayProps {
    rendered: boolean
}

export const Overlay: React.FC<OverlayProps> = (props) => {

    const {
        rendered
    } = props

    const [displayed, setDisplayed] = useState<boolean>(false)
    const [shown, setShown] = useState<boolean>(false)

    const onRender = () => {
        setDisplayed(true)
        turnScroll('off')
    }

    const onDisappear = () => {
        setShown(false)
        turnScroll('on')
    }

    useEffect(() => {
        if (rendered) onRender()
        else onDisappear()
    }, [rendered])

    useEffect(() => {
        if (displayed) {
            setTimeout(() => setShown(true), 50)
        }
    }, [displayed])

    useEffect(() => {
        if (!shown) {
            setTimeout(() => {
                setDisplayed(false)
            }, OUT_TRANSITION_TIME)
        }
    }, [shown])

    return (
        <div
            className={classNames(
                'feature-modal-overlay',
                {displayed},
                {shown}
            )}
        />
    )
}
