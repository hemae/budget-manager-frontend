import React, {useMemo} from 'react'
import {getApiError, MainIncomeResponse} from '@shared/api'
import {Form, FormRenderProps, useForm} from 'react-final-form'
import {
    createMainIncome,
    deleteMainIncome,
    EMainIncomeFormFieldName,
    getInitialMainIncomeFormValues,
    IMainIncomeFormValues,
    mapMainIncomeFormValuesToCreation,
    mapMainIncomeFormValuesToUpdating,
    mapMainIncomeToFormValues,
    updateMainIncome,
} from './api'
import {useNotify} from '@features/Notify'
import {InputField, SelectField} from '@features/form'
import {Button, DateSelect, OnDateSelect} from '@shared/UI'
import classNames from 'classnames'
import {FaPlus, FaTimes, FaUndoAlt} from 'react-icons/fa'
import {useModal} from '@features/Modal'
import {ConfirmationModal} from '@features/ConfirmationModal'
import {useMainIncomesData} from '@entities/MainIncomesDataProvider'
import {useProjectsData} from '@entities/ProjectsDataProvider'
import {useCurrencyData} from '@entities/CurrencyDataProvider'
import {useAuth} from '@entities/AuthProvider'
import './MainIncomeForm.scss'

interface MainIncomeFormProps {
    mainIncome?: MainIncomeResponse
}

export const MainIncomeForm: React.FC<MainIncomeFormProps> = (props) => {

    const {
        mainIncome,
    } = props

    const {
        mainIncomesHandleRefresh,
    } = useMainIncomesData()

    const {currentProject} = useProjectsData()

    const {
        user,
    } = useAuth()

    const {
        usdId,
    } = useCurrencyData()

    const initialValues: Partial<IMainIncomeFormValues> = useMemo(() => {
        if (mainIncome) {
            return mapMainIncomeToFormValues(mainIncome)
        }
        return getInitialMainIncomeFormValues(user?.preferredCurrencyId || null, usdId)
    }, [mainIncome, user, usdId])

    const notify = useNotify()

    const onSubmit = async (values: IMainIncomeFormValues) => {
        try {
            if (mainIncome) {
                await updateMainIncome({id: mainIncome._id}, mapMainIncomeFormValuesToUpdating(values))
            } else {
                if (currentProject) {
                    await createMainIncome(mapMainIncomeFormValuesToCreation(values, currentProject._id))
                }
            }
            mainIncomesHandleRefresh()
        } catch (e: any) {
            notify.error(getApiError(e))
        }
    }

    const {open: openDeleteConfirmationModal} = useModal(ConfirmationModal)

    const onDelete = async () => {
        if (mainIncome) {
            try {
                await deleteMainIncome({id: mainIncome._id})
                mainIncomesHandleRefresh()
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
            message: [`Do you really want to delete income`, mainIncome?.name ? `«${mainIncome.name}»` : ''].filter(e => !!e).join(' ') + '?'
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
                        isEdit={!!mainIncome}
                        onDeleteClick={onDeleteClick}
                    />
                )
            }}
        />
    )
}

interface InternalProps extends FormRenderProps<IMainIncomeFormValues, Partial<IMainIncomeFormValues>> {
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

    const form = useForm<IMainIncomeFormValues>()

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
            if (!isEdit) form.restart(getInitialMainIncomeFormValues(user?.preferredCurrencyId || null, usdId))
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
        if (date) form.change(EMainIncomeFormFieldName.date, date)
    }

    return (
        <form
            onSubmit={onFormSubmit}
            className='widget-main-income-form'
        >
            <InputField
                name={EMainIncomeFormFieldName.name}
                validate={validateName}
                placeholder='Main income name'
            />
            <InputField
                name={EMainIncomeFormFieldName.value}
                validate={validateValue}
                placeholder='Value'
            />
            <SelectField
                name={EMainIncomeFormFieldName.currencyId}
                options={currencyOptions}
                loading={currencyOptionsLoading}
                currentValue={null}
                onSelect={() => undefined}
            />
            <DateSelect
                currentValue={values[EMainIncomeFormFieldName.date]}
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
