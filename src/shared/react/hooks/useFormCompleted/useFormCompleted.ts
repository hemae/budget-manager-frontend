import {useEffect, useState} from 'react'
import {useFormState} from 'react-final-form'


interface Returned {
    /** true if no validation errors*/
    isFormCompleted: boolean
}

/** Used only in Form component ('react-final-form')*/
export function useFormCompleted(): Returned {

    const {errors} = useFormState()

    const [formCompleted, setFormCompleted] = useState<boolean>(false)

    useEffect(() => {
        if (errors) {
            setFormCompleted(!Object.keys(errors).length)
        } else {
            setFormCompleted(true)
        }
    }, [errors])

    return {
        isFormCompleted: formCompleted
    }
}