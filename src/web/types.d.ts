import { FC } from 'react'

declare global {
    interface Window {
        __SERVER_DATA__: any
    }
}

interface Route {
    path: string
    page: FC<any>
    fetchInitialData?: (path: string) => Promise<any>
}

interface Head {
    title: string
    meta?: Record<string, string>
}

export interface SquirrellyPartial {
    title: string
    partial: string
}

export interface LayoutRenderer {
    ({
        layout,
        content,
        data,
    }: {
        layout?: string
        content: string
        data: Record<string, any>
    }): string
}

export type LoginStatus = 'IDLE' | 'LOADING' | 'COMPLETE' | 'ERROR'
export interface LoginShape {
    username: string
    password: string
}
