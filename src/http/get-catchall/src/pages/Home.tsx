import { useEffect } from 'react'
import { Head } from '../components/Head'

export const Home = () => {
    useEffect(() => {
        console.log('Rendering home page...')
    }, [])
    return (
        <>
            <Head
                title="blue fish"
                meta={{
                    'og:title': 'Blue Fishhhhh',
                }}
            />
            <div className="text-pink-600">Home Page</div>
        </>
    )
}
