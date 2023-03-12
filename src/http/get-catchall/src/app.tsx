import { Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import { NotFound } from './NotFound'

export const App = ({ name }: { name?: string }) => {
    return (
        <>
            <Routes>
                {routes.map(({ path, component: C }) => (
                    <Route key={path} path={path} element={<C />} />
                ))}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}
