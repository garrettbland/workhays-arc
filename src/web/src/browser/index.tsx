import { hydrateRoot } from 'react-dom/client'
import { App } from '../App'
import { BrowserRouter } from 'react-router-dom'

/**
 * Client side react that runs in the browser to hyrdate
 * the server rendered React. Notice this is using `hydrateRoot`
 * and not the typical React `createRoot` method
 */
hydrateRoot(
    document.getElementById('root')!,
    <BrowserRouter>
        <App serverData={window.__SERVER_DATA__} />
    </BrowserRouter>
)
