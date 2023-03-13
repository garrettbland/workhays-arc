import { FC } from 'react'

declare global {
    interface Window {
        __INITIAL_DATA__: {
            name: string
        }
    }
}

interface Route {
    path: string
    page: FC
}

interface Head {
    title: string
    meta?: Record<string, string>
}
