import {ReactHOC} from '@shared/react'
import {SelectFiledProps} from './interfaces'
import {Field, useField, useForm, useFormState} from 'react-final-form'
import {useCallback, useEffect, useState} from 'react'
import {OnSelect} from '@shared/UI'

export const withSelectField: ReactHOC<SelectFiledProps> = (Component) => {
    return (props) => {

        const {
            name,
            validate,
            inputSize = 'large',
            onSelectChange,
            onSelect: onExternalSelect,
            ...rest
        } = props

        const form = useForm()

        const {values} = useFormState()

        const {meta: {error, touched}, input} = useField(name)

        const onSelect: OnSelect = useCallback((value: string | null, option) => {
            form.change(name, value)
            onExternalSelect?.(value, option)
        }, [form, name, onExternalSelect])

        const [currentValue, setCurrentValue] = useState<string | null>(null)

        useEffect(() => {
            setCurrentValue(values?.[name] || null)
        }, [values, name])

        return (
            <Field
                name={name}
                validate={validate}
                render={() => {
                    return (
                        // @ts-ignore
                        <Component
                            {...rest}
                            inputSize={inputSize}
                            feedback={touched ? (error || null) : null}
                            {...input}
                            onSelect={onSelect}
                            currentValue={currentValue}
                            onSelectChange={onSelectChange}
                        />
                    )
                }}
            />
        )
    }
}
