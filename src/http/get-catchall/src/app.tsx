import { Route, Routes } from 'react-router-dom'
import { routes } from './routes'

/**
 * Initial App to be rendered on both client and server.
 */

export const App = ({ name }: { name?: string }) => {
    return (
        <>
            <Routes>
                {routes.map(({ path, page: Page }) => (
                    <Route key={path} path={path} element={<Page />} />
                ))}
            </Routes>
        </>
    )
}
