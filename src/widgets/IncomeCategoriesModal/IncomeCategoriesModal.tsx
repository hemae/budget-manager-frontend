import React from 'react'
import {ModalProps} from '@features/Modal'
import {IncomeCategoryForm} from './components'
import {useIncomeCategoriesData} from '@entities/IncomeCategoriesDataProvider'
import {Loader, SimpleHeader} from '@shared/UI'
import './IncomeCategoriesModal.scss'

interface IncomeCategoriesModalProps extends ModalProps {

}

export const IncomeCategoriesModal: React.FC<IncomeCategoriesModalProps> = () => {

    const {
        incomeCategories,
        incomeCategoriesLoading,
    } = useIncomeCategoriesData()

    return (
        <Loader
            loading={incomeCategoriesLoading}
        >
            <div
                className='widget-income-categories-modal'
            >
                <SimpleHeader headerTitle='Income categories'/>
                <div
                    className='widget-income-categories-modal__wrapper'
                >
                    {incomeCategories.map(incomeCategory => {
                        return (
                            <IncomeCategoryForm
                                key={incomeCategory._id}
                                incomeCategory={incomeCategory}
                            />
                        )
                    })}
                    <IncomeCategoryForm key='0'/>
                </div>
            </div>
        </Loader>
    )
}
