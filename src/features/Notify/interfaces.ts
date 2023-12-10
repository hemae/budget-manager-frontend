export type NotifyType = 'success' | 'info' | 'warning' | 'error'

export interface PublicNotifyOptions {
    text: string
    title?: string
}

export interface NotifyOptions extends PublicNotifyOptions {
    type: NotifyType
}
