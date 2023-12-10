import React from 'react'
import {MainExpensesDataContext, IMainExpenseDataContext} from './MainExpensesDataContext'
import {
    getMainExpenses,
} from './api'
import {useAsyncData} from '@shared/react'
import {useErrorNotify} from '@features/useErrorNotify'
import {useProjectsData} from '../ProjectsDataProvider'

export const MainExpensesDataProvider: React.FC<React.PropsWithChildren> = ({children}) => {

    const {currentProject} = useProjectsData()

    const {
        data: mainExpenses,
        loading: mainExpensesLoading,
        error: mainExpensesError,
        handleRefresh: mainExpensesHandleRefresh,
    } = useAsyncData(async () => {
        if (currentProject) {
            const {results} = await getMainExpenses({
                page: 1,
                pageSize: 1_000,
                projectId: currentProject._id,
            })
            return results
        }
        return []
    }, [], [currentProject])

    useErrorNotify(mainExpensesError, 'main expenses')

    const value: IMainExpenseDataContext = {
        mainExpenses,
        mainExpensesLoading,
        mainExpensesHandleRefresh,
    }

    return (
        <MainExpensesDataContext.Provider
            value={value}
        >
            {children}
        </MainExpensesDataContext.Provider>
    )
}
