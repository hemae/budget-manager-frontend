import {composeProviders} from './lib'
import {ErrorBoundary} from '@processes/ErrorBoundary'
import {BrowserRouter} from 'react-router-dom'
import {NotifyProvider} from '@features/Notify'
import {AuthProvider} from '@entities/AuthProvider'
import {Secure} from '@widgets/Secure'
import {ProjectsDataProvider} from '@entities/ProjectsDataProvider'
import {CurrencyDataProvider} from '@entities/CurrencyDataProvider'
import {IncomeCategoriesDataProvider} from '@entities/IncomeCategoriesDataProvider'
import {ExpenseCategoriesDataProvider} from '@entities/ExpenseCategoriesDataProvider'
import {MainExpensesDataProvider} from '@entities/MainExpensesDataProvider'
import {MainIncomesDataProvider} from '@entities/MainIncomesDataProvider'
import {ModalProvider} from '@features/Modal'
import {Layout} from '@widgets/Layout'

/** Get attention providers should have defined order */
export const withProviders = composeProviders(
    // @ts-ignore
    ErrorBoundary,
    BrowserRouter,
    NotifyProvider,
    AuthProvider,
    Secure,
    CurrencyDataProvider,
    ProjectsDataProvider,
    IncomeCategoriesDataProvider,
    ExpenseCategoriesDataProvider,
    MainExpensesDataProvider,
    MainIncomesDataProvider,
    ModalProvider,
    Layout,
)
