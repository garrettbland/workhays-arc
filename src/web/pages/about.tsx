import { hydrateRoot } from 'react-dom/client'

export const About = ({ initialData = {} }) => {
    return <div>About Page</div>
}

const main = () => {
    if (globalThis.window) {
        hydrateRoot(
            document.getElementById('root')!,
            <About initialData={window.__SERVER_DATA__} />
        )
    }
}

main()
