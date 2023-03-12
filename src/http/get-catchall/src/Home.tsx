import { useEffect } from 'react'

export const Home = () => {
    useEffect(() => {
        console.log('Rendering home page...')
    }, [])
    return <div className="text-pink-600">Home Page</div>
}
