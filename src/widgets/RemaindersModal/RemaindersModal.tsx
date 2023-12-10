import React from 'react'
import {ModalProps} from '@features/Modal'
import {useAsyncData} from '@shared/react'
import {getRemainders} from './api'
import {useProjectsData} from '@entities/ProjectsDataProvider'
import moment from 'moment'
import {useErrorNotify} from '@features/useErrorNotify'
import {Loader, SimpleHeader} from '@shared/UI'
import './RemaindersModal.scss'

interface RemaindersModalProps extends ModalProps {

}

export const RemaindersModal: React.FC<RemaindersModalProps> = () => {

    const {currentProject} = useProjectsData()

    const {
        data: remainders,
        loading: remaindersLoading,
        error: remaindersError,
    } = useAsyncData(async () => {
        if (currentProject) {
            return await getRemainders({
                projectId: currentProject._id,
                date: moment().format('YYYY-MM-DD'),
            })
        }
        return null
    }, null, [currentProject])

    useErrorNotify(remaindersError, 'remainders')

    if (!remainders) return null

    return (
        <Loader
            loading={remaindersLoading}
        >
            <div
                className='widget-remainders-modal'
            >
                <SimpleHeader headerTitle='Remainders'/>
                {Object
                    .keys(remainders)
                    .map(rateCode => {
                        return (
                            <div
                                className='widget-remainders-modal__item'
                            >
                                <span>{Math.round(remainders[rateCode] * 100) / 100}</span>
                                <span>{rateCode}</span>
                            </div>
                        )
                    })
                }
            </div>
        </Loader>
    )
}
