import React, {useEffect, useMemo, useState} from 'react'
import {EExpenseIncomeKind, IExpenseIncome,} from '../../api'
import {
    createExpense,
    createIncome,
    deleteExpense,
    deleteIncome,
    EExpenseIncomeFormFiledName,
    getInitialExpenseIncomeFormValues,
    IExpenseIncomeFormValues,
    mapExpenseFormValuesToCreation,
    mapExpenseFormValuesToUpdating,
    mapExpenseIncomeToFormValues,
    mapIncomeFormValuesToCreation,
    mapIncomeFormValuesToUpdating,
    updateExpense,
    updateIncome,
} from './api'
import {Form, FormRenderProps, useForm} from 'react-final-form'
import {InputField, SelectField} from '@features/form'
import {useNotify} from '@features/Notify'
import {mapEnumToOptions} from '@shared/utils'
import {useBudgetDay} from '../../lib'
import {useCurrencyData} from '@entities/CurrencyDataProvider'
import {Button} from '@shared/UI'
import {getApiError} from '@shared/api'
import {useAuth} from '@entities/AuthProvider'
import {useModal} from '@features/Modal'
import {ConfirmationModal} from '@features/ConfirmationModal'
import {FaPlus, FaTimes, FaUndoAlt} from 'react-icons/fa'
import classNames from 'classnames'
import {useIncomeCategoriesData} from '@entities/IncomeCategoriesDataProvider'
import {useExpenseCategoriesData} from '@entities/ExpenseCategoriesDataProvider'
import {useProjectsData} from '@entities/ProjectsDataProvider'
import './ExpenseIncomeForm.scss'

interface ExpenseIncomeFormProps {
    expenseIncome?: IExpenseIncome
}

export const ExpenseIncomeForm: React.FC<ExpenseIncomeFormProps> = (props) => {

    const {
        expenseIncome,
    } = props

    const {
        expensesIncomesHandleRefresh,
        reportHandleRefresh,
        date,
    } = useBudgetDay()

    const {
        user,
    } = useAuth()

    const {
        usdId,
    } = useCurrencyData()

    const {
        currentProject,
    } = useProjectsData()

    const initialValues: Partial<IExpenseIncomeFormValues> = useMemo(() => {
        if (expenseIncome) {
            return mapExpenseIncomeToFormValues(expenseIncome)
        }
        return getInitialExpenseIncomeFormValues(user?.preferredCurrencyId || null, usdId)
    }, [expenseIncome, user, usdId])

    const notify = useNotify()

    const onSubmit = async (values: IExpenseIncomeFormValues) => {
        try {
            if (expenseIncome) {
                if (values[EExpenseIncomeFormFiledName.kind] === EExpenseIncomeKind.expense) {
                    await updateExpense({id: expenseIncome._id}, mapExpenseFormValuesToUpdating(values, date))
                } else {
                    await updateIncome({id: expenseIncome._id}, mapIncomeFormValuesToUpdating(values, date))
                }
            } else {
                if (currentProject) {
                    if (values[EExpenseIncomeFormFiledName.kind] === EExpenseIncomeKind.expense) {
                        await createExpense(mapExpenseFormValuesToCreation(values, date, currentProject._id))
                    } else {
                        await createIncome(mapIncomeFormValuesToCreation(values, date, currentProject._id))
                    }
                }
            }
            expensesIncomesHandleRefresh()
            reportHandleRefresh()
        } catch (e: any) {
            notify.error(getApiError(e))
        }
    }

    const {open: openDeleteConfirmationModal} = useModal(ConfirmationModal)

    const onDelete = async () => {
        if (expenseIncome) {
            if (expenseIncome.kind === EExpenseIncomeKind.expense) {
                await deleteExpense({id: expenseIncome._id})
            } else {
                await deleteIncome({id: expenseIncome._id})
            }
            expensesIncomesHandleRefresh()
            reportHandleRefresh()
        }
    }

    const onDeleteClick = () => {
        openDeleteConfirmationModal({
            confirmationHandler: onDelete,
            buttonLabel: 'Yes',
            additionalButtons: [{
                children: 'No',
                closeModal: true,
                kind: 'tertiary',
            }],
            message: [`Do you really want to delete ${expenseIncome?.kind}`, expenseIncome?.name ? `«${expenseIncome.name}»` : ''].filter(e => !!e).join(' ') + '?'
        })
    }

    return (
        <Form
            initialValues={initialValues}
            onSubmit={onSubmit}
            render={(props) => {
                return (
                    <Internal
                        {...props}
                        isEdit={!!expenseIncome}
                        onDeleteClick={onDeleteClick}
                    />
                )
            }}
        />
    )
}

interface InternalProps extends FormRenderProps<IExpenseIncomeFormValues, Partial<IExpenseIncomeFormValues>> {
    isEdit: boolean
    onDeleteClick: () => void
}

const Internal: React.FC<InternalProps> = (props) => {

    const {
        isEdit,
        onDeleteClick,
        handleSubmit,
        values,
    } = props

    const {
        incomeCategoryOptions,
        incomeCategoriesLoading,
    } = useIncomeCategoriesData()

    const {
        expenseCategoryOptions,
        expenseCategoriesLoading,
    } = useExpenseCategoriesData()

    const [isExpenseCategorySelectShown, setIsExpenseCategorySelectShown] = useState<boolean>(true)

    useEffect(() => {
        if (values[EExpenseIncomeFormFiledName.kind] === EExpenseIncomeKind.expense) {
            setIsExpenseCategorySelectShown(true)
        } else if (values[EExpenseIncomeFormFiledName.kind] === EExpenseIncomeKind.income) {
            setIsExpenseCategorySelectShown(false)
        }
    }, [values])

    const {
        currencyOptions,
        currencyOptionsLoading,
        usdId,
    } = useCurrencyData()

    const validateValue = (value: string | undefined) => {
        if (!value) return ' '
        if (isNaN(+value)) return ' '
        return undefined
    }

    const form = useForm<IExpenseIncomeFormValues>()

    const {
        user,
    } = useAuth()

    const onFormSubmit = async (event?: Partial<Pick<React.SyntheticEvent, 'preventDefault' | 'stopPropagation'>>) => {
        try {
            const res = await handleSubmit(event)
            if (!isEdit) form.restart(getInitialExpenseIncomeFormValues(user?.preferredCurrencyId || null, usdId))
            return res
        } catch (e) {
            throw e
        }
    }

    return (
        <form
            onSubmit={onFormSubmit}
            className='widget-budget-day-expense-income-form'
        >
            <SelectField
                name={EExpenseIncomeFormFiledName.kind}
                options={mapEnumToOptions(EExpenseIncomeKind)}
                currentValue={null}
                onSelect={() => undefined}
                disabled={isEdit}
                inputWrapperClassName={classNames({
                    expense: isEdit && values[EExpenseIncomeFormFiledName.kind] === EExpenseIncomeKind.expense,
                    income: isEdit && values[EExpenseIncomeFormFiledName.kind] === EExpenseIncomeKind.income,
                })}
            />
            <InputField
                name={EExpenseIncomeFormFiledName.value}
                validate={validateValue}
                placeholder='Value'
            />
            <SelectField
                name={EExpenseIncomeFormFiledName.currencyId}
                options={currencyOptions}
                loading={currencyOptionsLoading}
                currentValue={null}
                onSelect={() => undefined}
            />
            <InputField
                name={EExpenseIncomeFormFiledName.name}
                placeholder='Name (optional)'
            />
            {isExpenseCategorySelectShown &&
                <SelectField
                    name={EExpenseIncomeFormFiledName.expenseCategoryId}
                    options={expenseCategoryOptions}
                    loading={expenseCategoriesLoading}
                    allowClear
                    currentValue={null}
                    onSelect={() => undefined}
                    placeholder='Category (optional)'
                />}
            {!isExpenseCategorySelectShown &&
                <SelectField
                    name={EExpenseIncomeFormFiledName.incomeCategoryId}
                    options={incomeCategoryOptions}
                    loading={incomeCategoriesLoading}
                    allowClear
                    currentValue={null}
                    onSelect={() => undefined}
                    placeholder='Category (optional)'
                />}
            {!isEdit &&
                <Button
                    type='submit'
                    className={classNames('create')}
                ><FaPlus/></Button>}
            {isEdit &&
                <Button
                    type='submit'
                ><FaUndoAlt/></Button>}
            {isEdit &&
                <Button
                    type='button'
                    onClick={onDeleteClick}
                    className={classNames('delete')}
                ><FaTimes/></Button>}
        </form>
    )
}
