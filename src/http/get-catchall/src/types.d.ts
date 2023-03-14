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
