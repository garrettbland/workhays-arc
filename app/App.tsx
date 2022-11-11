export function App() {
    const alertMe = (name: string): void => {
        alert(`Woooo ${name.toUpperCase()} working now with some more changes...`)
    }
    return (
        <h1>
            Hello world! <button onClick={() => alertMe('garrett')}>CLick me button</button>
        </h1>
    )
}
