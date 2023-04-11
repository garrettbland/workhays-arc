import register from 'preact-custom-element'
// import htm from 'htm'
// Initialize htm with Preact
// const html = htm.bind(h)

const Button = ({ title = '', onClick }: { title: string; onClick?: () => void }) => {
    return <button onClick={onClick}>{title}</button>
}

export const Header = ({ name = 'Default' }) => {
    const handleClick = () => {
        window.alert('Ayoooo')
    }

    return (
        <>
            <div>Ayyyyoooo Header {name}</div>
            <Button title="dog" onClick={handleClick} />
        </>
    )
}

register(Header, 'x-header', ['name'], { shadow: false })
