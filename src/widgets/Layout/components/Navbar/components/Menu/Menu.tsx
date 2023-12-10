import React from 'react'
import {Button} from '@shared/UI'
import {ProfileModal} from '../../../../../ProfileModal'
import {ExpenseCategoriesModal} from '../../../../../ExpenseCategoriesModal'
import {IncomeCategoriesModal} from '../../../../../IncomeCategoriesModal'
import {MainExpensesModal} from '../../../../../MainExpensesModal'
import {MainIncomesModal} from '../../../../../MainIncomesModal'
import {RemaindersModal} from '../../../../../RemaindersModal'
import {useModal} from '@features/Modal'
import {useProjectsData} from '@entities/ProjectsDataProvider'
import {useAuth} from '@entities/AuthProvider'
import './Menu.scss'

export const Menu: React.FC = () => {

    const {
        currentProject,
    } = useProjectsData()

    const {user} = useAuth()

    const {open: openProfileModal} = useModal(ProfileModal)
    const {open: openExpenseCategoriesModal} = useModal(ExpenseCategoriesModal)
    const {open: openIncomeCategoriesModal} = useModal(IncomeCategoriesModal)
    const {open: openMainExpensesModal} = useModal(MainExpensesModal)
    const {open: openMainIncomesModal} = useModal(MainIncomesModal)
    const {open: openRemaindersModal} = useModal(RemaindersModal)

    const onProfileClick = () => {
        openProfileModal({})
    }

    const onExpenseCategoriesClick = () => {
        openExpenseCategoriesModal({})
    }

    const onIncomeCategoriesClick = () => {
        openIncomeCategoriesModal({})
    }

    const onMainExpensesClick = () => {
        openMainExpensesModal({})
    }

    const onMainIncomesClick = () => {
        openMainIncomesModal({})
    }

    const onRemaindersClick = () => {
        openRemaindersModal({})
    }

    return (
        <div
            className='widget-layout-navbar-menu'
        >
            <Button
                kind='tertiary'
                size='small'
                onClick={onProfileClick}
            >Profile</Button>
            {currentProject && currentProject.adminUserIds.includes(user?._id || '') &&
                <>
                    <Button
                        kind='tertiary'
                        size='small'
                        onClick={onRemaindersClick}
                    >Remainders</Button>
                    <Button
                        kind='tertiary'
                        size='small'
                        onClick={onExpenseCategoriesClick}
                    >Expense Categories</Button>
                    <Button
                        kind='tertiary'
                        size='small'
                        onClick={onIncomeCategoriesClick}
                    >Income Categories</Button>
                    <Button
                        kind='tertiary'
                        size='small'
                        onClick={onMainExpensesClick}
                    >Regular Expenses</Button>
                    <Button
                        kind='tertiary'
                        size='small'
                        onClick={onMainIncomesClick}
                    >Regular Incomes</Button>
                </>}
        </div>
    )
}
