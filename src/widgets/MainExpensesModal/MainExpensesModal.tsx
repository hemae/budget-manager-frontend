import React from 'react'
import {ModalProps} from '@features/Modal'
import {MainExpenseForm} from './components'
import {useMainExpensesData} from '@entities/MainExpensesDataProvider'
import {Loader, SimpleHeader} from '@shared/UI'
import './MainExpensesModal.scss'

interface MainExpensesModalProps extends ModalProps {

}

export const MainExpensesModal: React.FC<MainExpensesModalProps> = () => {

    const {
        mainExpenses,
        mainExpensesLoading,
    } = useMainExpensesData()

    return (
        <Loader
            loading={mainExpensesLoading}
        >
            <div
                className='widget-main-expenses-modal'
            >
                <SimpleHeader headerTitle='Regular Expenses'/>
                <div
                    className='widget-main-expenses-modal__wrapper'
                >
                    {mainExpenses.map(mainExpense => {
                        return (
                            <MainExpenseForm
                                key={mainExpense._id}
                                mainExpense={mainExpense}
                            />
                        )
                    })}
                    <MainExpenseForm key='0'/>
                </div>
            </div>
        </Loader>
    )
}
