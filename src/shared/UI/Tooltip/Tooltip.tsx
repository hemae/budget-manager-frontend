import React from 'react'
import {Tooltip as ReactTooltip} from 'react-tooltip'
import {TooltipProps} from './interfaces'
import 'react-tooltip/dist/react-tooltip.css'

export const Tooltip: React.FC<TooltipProps> = (props) => <ReactTooltip {...props} />
