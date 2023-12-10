import {useContext} from 'react'
import {IncomeCategoriesDataContext, IIncomeCategoriesDataContext} from './IncomeCategoriesDataContext'

export const useIncomeCategoriesData = () => useContext<IIncomeCategoriesDataContext>(IncomeCategoriesDataContext)
