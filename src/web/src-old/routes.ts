import { Route } from './types'
import { getSomeData } from './utils/fetchData'

/**
 * Pages
 */
import { Home } from './pages/Home'
import { About } from './pages/About'
import { NotFound } from './pages/NotFound'

/**
 * Routes - Passed to <Routes /> and rendered on
 * both client and server
 */
export const routes: Route[] = [
    {
        path: '/',
        page: Home,
        fetchInitialData: (path) => getSomeData(),
    },
    {
        path: '/about',
        page: About,
    },
    {
        path: '*',
        page: NotFound,
    },
]
