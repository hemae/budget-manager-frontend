import {Api} from '../lib'
import {PagedResult} from '../interfaces'
import {
    ProjectPostBody,
    ProjectPutByIdBody,
} from './body'
import {
    ProjectResponse,
    ProjectDeleteByIdResponse,
} from './interfaces'
import {
    ProjectGetByIdParams,
    ProjectPutByIdParams,
    ProjectDeleteByIdParams,
} from './params'
import {
    ProjectGetQuery,
} from './query'

export class Project {

    private static _basePath = '/project'

    public static getMethods(parentPath: string) {
        const basePath = `${parentPath}${Project._basePath}`
        return {
            get(query: ProjectGetQuery) {
                const path = '/'
                return Api.get<PagedResult<ProjectResponse>>({
                    path: `${basePath}${path}`,
                    query,
                })
            },
            getById({id}: ProjectGetByIdParams) {
                const path = '/'
                return Api.get<ProjectResponse>({
                    path: `${basePath}${path}${id}`,
                })
            },
            post(body: ProjectPostBody) {
                const path = '/'
                return Api.post<ProjectResponse>({
                    path: `${basePath}${path}`,
                    body,
                })
            },
            putById({id}: ProjectPutByIdParams, body: ProjectPutByIdBody) {
                const path = '/'
                return Api.put<ProjectResponse>({
                    path: `${basePath}${path}${id}`,
                    body,
                })
            },
            deleteById({id}: ProjectDeleteByIdParams) {
                const path = '/'
                return Api.delete<ProjectDeleteByIdResponse>({
                    path: `${basePath}${path}${id}`,
                })
            },
        }
    }
}
