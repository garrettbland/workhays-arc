import { Route, Routes } from 'react-router-dom'
import { routes } from './routes'

/**
 * Initial App to be rendered on both client and server.
 */

export const App = ({ serverData }: { serverData?: any }) => {
    return (
        <>
            <Routes>
                {routes.map(({ path, page: Page }) => (
                    <Route key={path} path={path} element={<Page serverData={serverData} />} />
                ))}
            </Routes>
        </>
    )
}
