import React from 'react'
import {MainIncomesDataContext, IMainIncomeDataContext} from './MainIncomesDataContext'
import {
    getMainIncomes,
} from './api'
import {useAsyncData} from '@shared/react'
import {useErrorNotify} from '@features/useErrorNotify'
import {useProjectsData} from '../ProjectsDataProvider'

export const MainIncomesDataProvider: React.FC<React.PropsWithChildren> = ({children}) => {

    const {currentProject} = useProjectsData()

    const {
        data: mainIncomes,
        loading: mainIncomesLoading,
        error: mainIncomesError,
        handleRefresh: mainIncomesHandleRefresh,
    } = useAsyncData(async () => {
        if (currentProject) {
            const {results} = await getMainIncomes({
                page: 1,
                pageSize: 1_000,
                projectId: currentProject._id,
            })
            return results
        }
        return []
    }, [], [currentProject])

    useErrorNotify(mainIncomesError, 'main incomes')

    const value: IMainIncomeDataContext = {
        mainIncomes,
        mainIncomesLoading,
        mainIncomesHandleRefresh,
    }

    return (
        <MainIncomesDataContext.Provider
            value={value}
        >
            {children}
        </MainIncomesDataContext.Provider>
    )
}
