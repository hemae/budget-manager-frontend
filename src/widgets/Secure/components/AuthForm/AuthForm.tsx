import React, {Dispatch, SetStateAction, useState} from 'react'
import {Form, FormRenderProps} from 'react-final-form'
import {
    IAuthFormValues,
    EAuthFormFieldName,
    postRegister,
    postAuthenticate,
    mapAuthFormValuesToAuthenticate,
    mapAuthFormValuesToRegister,
} from './api'
import {InputField} from '@features/form'
import {Button, Loader} from '@shared/UI'
import {useNotify} from '@features/Notify'
import {useAuth, setCookieToken} from '@entities/AuthProvider'
import {getApiError} from '@shared/api'
import {FaEye, FaEyeSlash} from 'react-icons/fa'
import './AuthForm.scss'

export const AuthForm: React.FC<React.PropsWithChildren> = () => {

    const {
        setUser,
    } = useAuth()

    const [auth, setAuth] = useState<'login' | 'register'>('login')

    const notify = useNotify()

    const onSubmit = async (values: IAuthFormValues) => {
        try {
            if (auth === 'login') {
                const {jwt, ...user} = await postAuthenticate(mapAuthFormValuesToAuthenticate(values))
                setCookieToken(jwt)
                setUser(user)
            }
            if (auth === 'register') {
                const {jwt, ...user} = await postRegister(mapAuthFormValuesToRegister(values))
                setCookieToken(jwt)
                setUser(user)
            }
        } catch (e: any) {
            notify.error(getApiError(e))
        }
    }

    return (
        <Form
            render={(props) => {
                return (
                    <Internal
                        {...props}
                        auth={auth}
                        setAuth={setAuth}
                    />
                )
            }}
            onSubmit={onSubmit}
        />
    )
}

interface InternalProps extends FormRenderProps<IAuthFormValues, Partial<IAuthFormValues>> {
    auth: 'login' | 'register'
    setAuth: Dispatch<SetStateAction<'login' | 'register'>>
}

const Internal: React.FC<InternalProps> = (props) => {

    const {
        handleSubmit,
        submitting,
        auth,
        setAuth,
    } = props

    const [passwordShown, setPasswordShown] = useState<boolean>(false)
    const [confirmationPasswordShown, setConfirmationPasswordShown] = useState<boolean>(false)

    const onEyeClick = () => {
        setPasswordShown(prev => !prev)
    }

    const onConfirmationEyeClick = () => {
        setConfirmationPasswordShown(prev => !prev)
    }

    return (
        <Loader loading={submitting}>
            <form
                onSubmit={handleSubmit}
                className='entity-auth-auth-form'
            >
                <InputField
                    name={EAuthFormFieldName.email}
                    placeholder='Email'
                />
                <InputField
                    name={EAuthFormFieldName.password}
                    placeholder='Password'
                    type={passwordShown ? 'text' : 'password'}
                    suffixIcon={passwordShown ? <FaEyeSlash/> : <FaEye/>}
                    onSuffixIconClick={onEyeClick}
                />
                {auth === 'register' &&
                    <InputField
                        name={EAuthFormFieldName.passwordConfirmation}
                        placeholder='Confirm password'
                        type={confirmationPasswordShown ? 'text' : 'password'}
                        suffixIcon={confirmationPasswordShown ? <FaEyeSlash/> : <FaEye/>}
                        onSuffixIconClick={onConfirmationEyeClick}
                    />}
                <Button
                    type='submit'
                >Submit</Button>
                <div
                    className='entity-auth-auth-form__row'
                >
                    <Button
                        type='button'
                        onClick={() => setAuth('login')}
                        disabled={auth === 'login'}
                    >Sign In</Button>
                    <Button
                        type='button'
                        onClick={() => setAuth('register')}
                        disabled={auth === 'register'}
                    >Sign Up</Button>
                </div>
            </form>
        </Loader>
    )
}
