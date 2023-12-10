import React, {useMemo} from 'react'
import {getApiError, IncomeCategoryResponse} from '@shared/api'
import {Form, FormRenderProps, useForm} from 'react-final-form'
import {
    IIncomeCategoryFormValues,
    EIncomeCategoryFormFieldName,
    mapIncomeCategoryToFormValues,
    createIncomeCategory,
    mapIncomeCategoryFormValuesToCreation,
    updateIncomeCategory,
    mapIncomeCategoryFormValuesToUpdating,
    deleteIncomeCategory,
} from './api'
import {useNotify} from '@features/Notify'
import {InputField} from '@features/form'
import {Button} from '@shared/UI'
import classNames from 'classnames'
import {FaPlus, FaTimes, FaUndoAlt} from 'react-icons/fa'
import {useModal} from '@features/Modal'
import {ConfirmationModal} from '@features/ConfirmationModal'
import {useIncomeCategoriesData} from '@entities/IncomeCategoriesDataProvider'
import {useProjectsData} from '@entities/ProjectsDataProvider'
import './IncomeCategoryForm.scss'

interface IncomeCategoryFormProps {
    incomeCategory?: IncomeCategoryResponse
}

export const IncomeCategoryForm: React.FC<IncomeCategoryFormProps> = (props) => {

    const {
        incomeCategory,
    } = props

    const {
        incomeCategoriesHandleRefresh,
    } = useIncomeCategoriesData()

    const {
        currentProject,
    } = useProjectsData()

    const initialValues: Partial<IIncomeCategoryFormValues> = useMemo(() => {
        if (incomeCategory) {
            return mapIncomeCategoryToFormValues(incomeCategory)
        }
        return {}
    }, [incomeCategory])

    const notify = useNotify()

    const onSubmit = async (values: IIncomeCategoryFormValues) => {
        try {
            if (incomeCategory) {
                await updateIncomeCategory({id: incomeCategory._id}, mapIncomeCategoryFormValuesToUpdating(values))
            } else {
                if (currentProject) {
                    await createIncomeCategory(mapIncomeCategoryFormValuesToCreation(values, currentProject._id))
                }
            }
            incomeCategoriesHandleRefresh()
        } catch (e: any) {
            notify.error(getApiError(e))
        }
    }

    const {open: openDeleteConfirmationModal} = useModal(ConfirmationModal)

    const onDelete = async () => {
        if (incomeCategory) {
            try {
                await deleteIncomeCategory({id: incomeCategory._id})
                incomeCategoriesHandleRefresh()
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
            message: [`Do you really want to delete income category`, incomeCategory?.name ? `«${incomeCategory.name}»` : ''].filter(e => !!e).join(' ') + '?'
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
                        isEdit={!!incomeCategory}
                        onDeleteClick={onDeleteClick}
                    />
                )
            }}
        />
    )
}

interface InternalProps extends FormRenderProps<IIncomeCategoryFormValues, Partial<IIncomeCategoryFormValues>> {
    isEdit: boolean
    onDeleteClick: () => void
}

const Internal: React.FC<InternalProps> = (props) => {

    const {
        handleSubmit,
        isEdit,
        onDeleteClick,
    } = props

    const form = useForm<IIncomeCategoryFormValues>()

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
            className='widget-income-categories-form'
        >
            <InputField
                name={EIncomeCategoryFormFieldName.name}
                validate={validateName}
                placeholder='Income category name'
            />
            <InputField
                name={EIncomeCategoryFormFieldName.description}
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
