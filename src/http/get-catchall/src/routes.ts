import { Route } from './types'

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
