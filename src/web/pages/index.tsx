import { hydrateRoot } from 'react-dom/client'
import { useState } from 'react'

export const Home = ({ initialData = {} }) => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <button onClick={() => setOpen(!isOpen)}>{isOpen ? 'Close Me' : 'Open Me'}</button>
            <div>Why hello this is {initialData?.name ?? 'default'}</div>
        </>
    )
}

const main = () => {
    if (globalThis.window) {
        hydrateRoot(document.getElementById('root')!, <Home initialData={window.__SERVER_DATA__} />)
    }
}

main()
