export function App() {
    type name = string

    const alertMe = (name: name): void => {
        alert(`Woooo ${name.toUpperCase()} working now with some more changes...`)
    }
    return (
        <h1>
            Hello world!!!{' '}
            <button
                onClick={() => alertMe('garrett!!!')}
                className="p-2 rounded bg-gray-200 hover:bg-red-200"
            >
                CLick me meow hello
            </button>
            <div>Weeeee more stuff</div>
        </h1>
    )
}
