import { renderToString } from 'react-dom/server'
import { useState } from 'react'

const list = [
    {
        name: 'garrett',
    },
    {
        name: 'lane',
    },
    {
        name: 'michelle',
    },
]

const App = ({ name }: { name: string }) => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <div>Hello {name}</div>
            <button onClick={() => setCount(count + 1)}>You clicked me {count} times</button>
        </div>
    )
}

function Counter() {
    const [count, setCount] = useState(0)
    return <button onClick={() => setCount(count + 1)}>You clicked me {count} times</button>
}

export const html = () =>
    renderToString(
        <div id="root">
            <App name="Work Hays" />
        </div>
    )
