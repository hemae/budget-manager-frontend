import React from 'react'
import {ModalProps} from '@features/Modal'
import {ExpenseCategoryForm} from './components'
import {useExpenseCategoriesData} from '@entities/ExpenseCategoriesDataProvider'
import {Loader, SimpleHeader} from '@shared/UI'
import './ExpenseCategoriesModal.scss'

interface ExpenseCategoriesModalProps extends ModalProps {

}

export const ExpenseCategoriesModal: React.FC<ExpenseCategoriesModalProps> = () => {

    const {
        expenseCategories,
        expenseCategoriesLoading,
    } = useExpenseCategoriesData()

    return (
        <Loader
            loading={expenseCategoriesLoading}
        >
            <div
                className='widget-expense-categories-modal'
            >
                <SimpleHeader headerTitle='Expense categories'/>
                <div
                    className='widget-expense-categories-modal__wrapper'
                >
                    {expenseCategories.map(expenseCategory => {
                        return (
                            <ExpenseCategoryForm
                                key={expenseCategory._id}
                                expenseCategory={expenseCategory}
                            />
                        )
                    })}
                    <ExpenseCategoryForm key='0'/>
                </div>
            </div>
        </Loader>
    )
}
