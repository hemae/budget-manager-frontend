import React, {useMemo} from 'react'
import {getApiError, MainExpenseResponse} from '@shared/api'
import {Form, FormRenderProps, useForm} from 'react-final-form'
import {
    createMainExpense,
    deleteMainExpense,
    EMainExpenseFormFieldName,
    getInitialMainExpenseFormValues,
    IMainExpenseFormValues,
    mapMainExpenseFormValuesToCreation,
    mapMainExpenseFormValuesToUpdating,
    mapMainExpenseToFormValues,
    updateMainExpense,
} from './api'
import {useNotify} from '@features/Notify'
import {InputField, SelectField} from '@features/form'
import {Button, DateSelect, OnDateSelect} from '@shared/UI'
import classNames from 'classnames'
import {FaPlus, FaTimes, FaUndoAlt} from 'react-icons/fa'
import {useModal} from '@features/Modal'
import {ConfirmationModal} from '@features/ConfirmationModal'
import {useMainExpensesData} from '@entities/MainExpensesDataProvider'
import {useProjectsData} from '@entities/ProjectsDataProvider'
import {useCurrencyData} from '@entities/CurrencyDataProvider'
import {useAuth} from '@entities/AuthProvider'
import './MainExpenseForm.scss'

interface MainExpenseFormProps {
    mainExpense?: MainExpenseResponse
}

export const MainExpenseForm: React.FC<MainExpenseFormProps> = (props) => {

    const {
        mainExpense,
    } = props

    const {
        mainExpensesHandleRefresh,
    } = useMainExpensesData()

    const {currentProject} = useProjectsData()

    const {
        user,
    } = useAuth()

    const {
        usdId,
    } = useCurrencyData()

    const initialValues: Partial<IMainExpenseFormValues> = useMemo(() => {
        if (mainExpense) {
            return mapMainExpenseToFormValues(mainExpense)
        }
        return getInitialMainExpenseFormValues(user?.preferredCurrencyId || null, usdId)
    }, [mainExpense, user, usdId])

    const notify = useNotify()

    const onSubmit = async (values: IMainExpenseFormValues) => {
        try {
            if (mainExpense) {
                await updateMainExpense({id: mainExpense._id}, mapMainExpenseFormValuesToUpdating(values))
            } else {
                if (currentProject) {
                    await createMainExpense(mapMainExpenseFormValuesToCreation(values, currentProject._id))
                }
            }
            mainExpensesHandleRefresh()
        } catch (e: any) {
            notify.error(getApiError(e))
        }
    }

    const {open: openDeleteConfirmationModal} = useModal(ConfirmationModal)

    const onDelete = async () => {
        if (mainExpense) {
            try {
                await deleteMainExpense({id: mainExpense._id})
                mainExpensesHandleRefresh()
            } catch (e: any) {
                notify.error(getApiError(e))
            }
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
            message: [`Do you really want to delete expense`, mainExpense?.name ? `«${mainExpense.name}»` : ''].filter(e => !!e).join(' ') + '?'
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
                        isEdit={!!mainExpense}
                        onDeleteClick={onDeleteClick}
                    />
                )
            }}
        />
    )
}

interface InternalProps extends FormRenderProps<IMainExpenseFormValues, Partial<IMainExpenseFormValues>> {
    isEdit: boolean
    onDeleteClick: () => void
}

const Internal: React.FC<InternalProps> = (props) => {

    const {
        handleSubmit,
        isEdit,
        onDeleteClick,
        values,
    } = props

    const form = useForm<IMainExpenseFormValues>()

    const {
        currencyOptions,
        currencyOptionsLoading,
        usdId,
    } = useCurrencyData()

    const {
        user,
    } = useAuth()

    const onFormSubmit = async (event?: Partial<Pick<React.SyntheticEvent, 'preventDefault' | 'stopPropagation'>>) => {
        try {
            const res = await handleSubmit(event)
            if (!isEdit) form.restart(getInitialMainExpenseFormValues(user?.preferredCurrencyId || null, usdId))
            return res
        } catch (e) {
            throw e
        }
    }

    const validateName = (value: string | undefined) => {
        if (!value) return ' '
        return undefined
    }

    const validateValue = (value: string | undefined) => {
        if (!value) return ' '
        if (isNaN(+value)) return ' '
        return undefined
    }

    const onDateSelect: OnDateSelect = (date) => {
        if (date) form.change(EMainExpenseFormFieldName.date, date)
    }

    return (
        <form
            onSubmit={onFormSubmit}
            className='widget-main-expense-form'
        >
            <InputField
                name={EMainExpenseFormFieldName.name}
                validate={validateName}
                placeholder='Main expense name'
            />
            <InputField
                name={EMainExpenseFormFieldName.value}
                validate={validateValue}
                placeholder='Value'
            />
            <SelectField
                name={EMainExpenseFormFieldName.currencyId}
                options={currencyOptions}
                loading={currencyOptionsLoading}
                currentValue={null}
                onSelect={() => undefined}
            />
            <DateSelect
                currentValue={values[EMainExpenseFormFieldName.date]}
                onDateSelect={onDateSelect}
                inputSize='large'
                placeholder='Select date'
                format='MMM D, YYYY'
            />
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
