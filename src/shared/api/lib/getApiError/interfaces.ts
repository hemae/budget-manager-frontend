export interface ApiErrorItem {
    fieldName: string | undefined
    message: string
}

export interface ApiError {
    errors: ApiErrorItem[]
    message: string
}
