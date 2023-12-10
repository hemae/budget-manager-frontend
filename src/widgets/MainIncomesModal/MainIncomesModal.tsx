import React from 'react'
import {ModalProps} from '@features/Modal'
import {MainIncomeForm} from './components'
import {useMainIncomesData} from '@entities/MainIncomesDataProvider'
import {Loader, SimpleHeader} from '@shared/UI'
import './MainIncomesModal.scss'

interface MainIncomesModalProps extends ModalProps {

}

export const MainIncomesModal: React.FC<MainIncomesModalProps> = () => {

    const {
        mainIncomes,
        mainIncomesLoading,
    } = useMainIncomesData()

    return (
        <Loader
            loading={mainIncomesLoading}
        >
            <div
                className='widget-main-incomes-modal'
            >
                <SimpleHeader headerTitle='Regular Incomes'/>
                <div
                    className='widget-main-incomes-modal__wrapper'
                >
                    {mainIncomes.map(mainIncome => {
                        return (
                            <MainIncomeForm
                                key={mainIncome._id}
                                mainIncome={mainIncome}
                            />
                        )
                    })}
                    <MainIncomeForm key='0'/>
                </div>
            </div>
        </Loader>
    )
}
