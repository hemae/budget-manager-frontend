import React, {useMemo} from 'react'
import {getApiError, ExpenseCategoryResponse} from '@shared/api'
import {Form, FormRenderProps, useForm} from 'react-final-form'
import {
    IExpenseCategoryFormValues,
    EExpenseCategoryFormFieldName,
    mapExpenseCategoryToFormValues,
    createExpenseCategory,
    mapExpenseCategoryFormValuesToCreation,
    updateExpenseCategory,
    mapExpenseCategoryFormValuesToUpdating,
    deleteExpenseCategory,
} from './api'
import {useNotify} from '@features/Notify'
import {InputField} from '@features/form'
import {Button} from '@shared/UI'
import classNames from 'classnames'
import {FaPlus, FaTimes, FaUndoAlt} from 'react-icons/fa'
import {useModal} from '@features/Modal'
import {ConfirmationModal} from '@features/ConfirmationModal'
import {useExpenseCategoriesData} from '@entities/ExpenseCategoriesDataProvider'
import {useProjectsData} from '@entities/ProjectsDataProvider'
import './ExpenseCategoryForm.scss'

interface ExpenseCategoryFormProps {
    expenseCategory?: ExpenseCategoryResponse
}

export const ExpenseCategoryForm: React.FC<ExpenseCategoryFormProps> = (props) => {

    const {
        expenseCategory,
    } = props

    const {
        expenseCategoriesHandleRefresh,
    } = useExpenseCategoriesData()

    const {currentProject} = useProjectsData()

    const initialValues: Partial<IExpenseCategoryFormValues> = useMemo(() => {
        if (expenseCategory) {
            return mapExpenseCategoryToFormValues(expenseCategory)
        }
        return {}
    }, [expenseCategory])

    const notify = useNotify()

    const onSubmit = async (values: IExpenseCategoryFormValues) => {
        try {
            if (expenseCategory) {
                await updateExpenseCategory({id: expenseCategory._id}, mapExpenseCategoryFormValuesToUpdating(values))
            } else {
                if (currentProject) {
                    await createExpenseCategory(mapExpenseCategoryFormValuesToCreation(values, currentProject._id))
                }
            }
            expenseCategoriesHandleRefresh()
        } catch (e: any) {
            notify.error(getApiError(e))
        }
    }

    const {open: openDeleteConfirmationModal} = useModal(ConfirmationModal)

    const onDelete = async () => {
        if (expenseCategory) {
            try {
                await deleteExpenseCategory({id: expenseCategory._id})
                expenseCategoriesHandleRefresh()
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
            message: [`Do you really want to delete expense category`, expenseCategory?.name ? `«${expenseCategory.name}»` : ''].filter(e => !!e).join(' ') + '?'
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
                        isEdit={!!expenseCategory}
                        onDeleteClick={onDeleteClick}
                    />
                )
            }}
        />
    )
}

interface InternalProps extends FormRenderProps<IExpenseCategoryFormValues, Partial<IExpenseCategoryFormValues>> {
    isEdit: boolean
    onDeleteClick: () => void
}

const Internal: React.FC<InternalProps> = (props) => {

    const {
        handleSubmit,
        isEdit,
        onDeleteClick,
    } = props

    const form = useForm<IExpenseCategoryFormValues>()

    const onFormSubmit = async (event?: Partial<Pick<React.SyntheticEvent, 'preventDefault' | 'stopPropagation'>>) => {
        try {
            const res = await handleSubmit(event)
            if (!isEdit) form.restart({})
            return res
        } catch (e) {
            throw e
        }
    }

    const validateName = (value: string | undefined) => {
        if (!value) return ' '
        return undefined
    }

    return (
        <form
            onSubmit={onFormSubmit}
            className='widget-expense-categories-form'
        >
            <InputField
                name={EExpenseCategoryFormFieldName.name}
                validate={validateName}
                placeholder='Expense category name'
            />
            <InputField
                name={EExpenseCategoryFormFieldName.description}
                placeholder='Description (optional)'
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
