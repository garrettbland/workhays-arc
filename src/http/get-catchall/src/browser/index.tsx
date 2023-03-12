import { hydrateRoot } from 'react-dom/client'
import { App } from '../app'
import { BrowserRouter } from 'react-router-dom'

hydrateRoot(
    document.getElementById('root')!,
    <BrowserRouter>
        <App name={window.__INITIAL_DATA__.name} />
    </BrowserRouter>
)
