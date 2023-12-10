import React from 'react'
import {withWrapper} from '@shared/react'
import {
    BudgetDayProvider,
    useBudgetDay,
} from './lib'
import {
    ExpenseIncomeForm,
    DailyReport,
} from './components'
import {Button, Card, DateSelect, Loader, OnDateSelect} from '@shared/UI'
import {EnabledDays} from '@shared/UI/Calendar/interfaces'
import {useProjectsData} from '@entities/ProjectsDataProvider'
import './BudgetDay.scss'

const BudgetDayContent: React.FC = () => {

    const {
        date,
        setDate,
        expensesIncomes,
        expensesIncomesLoading,
    } = useBudgetDay()

    const onDateSelect: OnDateSelect = (stringDate) => {
        if (stringDate) setDate(stringDate)
    }

    const {currentProject} = useProjectsData()

    const enabledDates: EnabledDays = (date) => {
        if (!currentProject) return false
        return date >= currentProject.settlementDate
    }

    return (
        <Loader
            loading={expensesIncomesLoading}
        >
            <Card
                className='widget-budget-day'
            >
                <div
                    className='widget-budget-day__header'
                >
                    <DateSelect
                        currentValue={date}
                        onDateSelect={onDateSelect}
                        format='MMM D, YYYY, dddd'
                        dropdownPlacement='bottom-left'
                        enabledDates={enabledDates}
                    />
                    <DailyReport/>
                </div>
                {expensesIncomes.map(expenseIncome => {
                    return (
                        <ExpenseIncomeForm
                            key={expenseIncome._id}
                            expenseIncome={expenseIncome}
                        />
                    )
                })}
                <ExpenseIncomeForm key='0'/>
            </Card>
        </Loader>
    )
}

export const BudgetDay = withWrapper(BudgetDayProvider)(BudgetDayContent)
