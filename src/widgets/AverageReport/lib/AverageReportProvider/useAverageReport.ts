import {useContext} from 'react'
import {AverageReportContext, IAverageReportContext} from './AverageReportContext'

export const useAverageReport = () => useContext<IAverageReportContext>(AverageReportContext)
