export type UniqueId = string
export type Timestamp = string
export type DateOnly = string
export type Integer = number
export type Float = number
export type Token = string
export type Email = string

export type Nullable<Dto = any> = Dto | null

export interface EntityBase {
    _id: UniqueId
    __v: number
    createdAt: Timestamp
    updatedAt: Timestamp
}

export type PagedResult<Interface> = {
    meta: {
        totalCount: number
        page: number
        pageSize: number
    }
    results: Interface[]
}
