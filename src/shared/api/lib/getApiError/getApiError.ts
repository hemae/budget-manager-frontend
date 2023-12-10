import {AxiosError} from 'axios'
import {ApiError} from './interfaces'

export function getApiError(e: AxiosError<ApiError>, entityName?: string): string {
    if (e.response?.data) {
        return `${e.response.data.message || ''}:\n ${e.response.data.errors.map(error => `${error.fieldName}: ${error.message}`).join('\n')}`
    }
    return `Something went wrong while fetching ${entityName || 'entity'}`
}
