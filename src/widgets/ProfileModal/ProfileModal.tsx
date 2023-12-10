import React, {useMemo} from 'react'
import {ModalProps} from '@features/Modal'
import {Form, FormRenderProps} from 'react-final-form'
import {Button, Loader, SimpleHeader} from '@shared/UI'
import {
    IProfileFormValues,
    EProfileFormFieldName,
    mapUserToFormValues,
    updateUser,
    mapProfileFormValuesToUpdating,
} from './api'
import {useAuth} from '@entities/AuthProvider'
import {useNotify} from '@features/Notify'
import {getApiError} from '@shared/api'
import {InputField, SelectField} from '@features/form'
import {useCurrencyData} from '@entities/CurrencyDataProvider'
import './ProfileModal.scss'

interface ProfileModalProps extends ModalProps {

}

export const ProfileModal: React.FC<ProfileModalProps> = () => {

    const {user, setUser} = useAuth()

    const initialValues = useMemo(() => mapUserToFormValues(user), [user])

    const notify = useNotify()

    const onSubmit = async (values: IProfileFormValues) => {
        if (user) {
            try {
                const res = await updateUser({id: user._id}, mapProfileFormValuesToUpdating(values))
                setUser(res)
            } catch (e: any) {
                notify.error(getApiError(e))
            }
        }
    }

    return (
        <Form
            initialValues={initialValues}
            onSubmit={onSubmit}
            render={(props) => {
                return (
                    <Internal
                        {...props}
                    />
                )
            }}
        />
    )
}

interface InternalProps extends FormRenderProps<IProfileFormValues, Partial<IProfileFormValues>> {

}

const Internal: React.FC<InternalProps> = (props) => {

    const {
        handleSubmit,
        submitting,
    } = props

    const {
        currencyOptions,
        currencyOptionsLoading,
    } = useCurrencyData()

    return (
        <Loader
            loading={submitting}
        >
            <form
                onSubmit={handleSubmit}
                className='widget-profile-modal'
            >
                <SimpleHeader headerTitle='Profile'/>
                <InputField
                    name={EProfileFormFieldName.firstName}
                    placeholder='First name'
                />
                <InputField
                    name={EProfileFormFieldName.lastName}
                    placeholder='Last name'
                />
                {/* @ts-ignore */}
                <SelectField
                    name={EProfileFormFieldName.preferredCurrencyId}
                    placeholder='Select preferred currency'
                    options={currencyOptions}
                    loading={currencyOptionsLoading}
                />
                <Button
                    type='submit'
                >Save</Button>
            </form>
        </Loader>
    )
}
