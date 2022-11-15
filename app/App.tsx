export function App() {
    const alertMe = (name: string): void => {
        alert(`Woooo ${name.toUpperCase()} working now with some more changes...`)
    }
    return (
        <h1>
            Hello world!!!{' '}
            <button
                onClick={() => alertMe('garrett!!!')}
                className="p-2 rounded bg-gray-200 hover:bg-green-200"
            >
                CLick me button
            </button>
            <div>Weeeee more stuff</div>
        </h1>
    )
}
