import React from 'react'
import {ExpenseCategoriesDataContext, IExpenseCategoriesDataContext} from './ExpenseCategoriesDataContext'
import {
    getExpenseCategories,
    mapExpenseCategoriesToOptions,
} from './api'
import {useAsyncData} from '@shared/react'
import {useErrorNotify} from '@features/useErrorNotify'
import {useProjectsData} from '../ProjectsDataProvider'

export const ExpenseCategoriesDataProvider: React.FC<React.PropsWithChildren> = ({children}) => {

    const {currentProject} = useProjectsData()

    const {
        data: {expenseCategories, expenseCategoryOptions},
        loading: expenseCategoriesLoading,
        error: expenseCategoriesError,
        handleRefresh: expenseCategoriesHandleRefresh,
    } = useAsyncData(async () => {
        if (currentProject) {
            const {results} = await getExpenseCategories({
                page: 1,
                pageSize: 1_000,
                projectId: currentProject._id,
            })
            return {
                expenseCategories: results,
                expenseCategoryOptions: mapExpenseCategoriesToOptions(results)
            }
        }
        return {expenseCategories: [], expenseCategoryOptions: []}
    }, {expenseCategories: [], expenseCategoryOptions: []}, [currentProject])

    useErrorNotify(expenseCategoriesError, 'expense categories')

    const value: IExpenseCategoriesDataContext = {
        expenseCategories,
        expenseCategoryOptions,
        expenseCategoriesLoading,
        expenseCategoriesHandleRefresh,
    }

    return (
        <ExpenseCategoriesDataContext.Provider
            value={value}
        >
            {children}
        </ExpenseCategoriesDataContext.Provider>
    )
}
