import {ReactHOC} from '@shared/react'
import {FiledProps} from './interfaces'
import {Field, useField} from 'react-final-form'

export const withField: ReactHOC<FiledProps> = (Component) => {

    return (props) => {

        const {
            name,
            validate,
            inputSize = 'large',
            ...rest
        } = props

        const {meta: {error, touched}, input} = useField(name)

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
                        />
                    )
                }}
            />
        )
    }
}
