import React from 'react'
import {IncomeCategoriesDataContext, IIncomeCategoriesDataContext} from './IncomeCategoriesDataContext'
import {
    getIncomeCategories,
    mapIncomeCategoriesToOptions,
} from './api'
import {useAsyncData} from '@shared/react'
import {useErrorNotify} from '@features/useErrorNotify'
import {useProjectsData} from '../ProjectsDataProvider'

export const IncomeCategoriesDataProvider: React.FC<React.PropsWithChildren> = ({children}) => {

    const {currentProject} = useProjectsData()

    const {
        data: {incomeCategories, incomeCategoryOptions},
        loading: incomeCategoriesLoading,
        error: incomeCategoriesError,
        handleRefresh: incomeCategoriesHandleRefresh,
    } = useAsyncData(async () => {
        if (currentProject) {
            const {results} = await getIncomeCategories({
                page: 1,
                pageSize: 1_000,
                projectId: currentProject._id,
            })
            return {
                incomeCategories: results,
                incomeCategoryOptions: mapIncomeCategoriesToOptions(results)
            }
        }
        return {incomeCategories: [], incomeCategoryOptions: []}
    }, {incomeCategories: [], incomeCategoryOptions: []}, [currentProject])

    useErrorNotify(incomeCategoriesError, 'income categories')

    const value: IIncomeCategoriesDataContext = {
        incomeCategories,
        incomeCategoryOptions,
        incomeCategoriesLoading,
        incomeCategoriesHandleRefresh,
    }

    return (
        <IncomeCategoriesDataContext.Provider
            value={value}
        >
            {children}
        </IncomeCategoriesDataContext.Provider>
    )
}
