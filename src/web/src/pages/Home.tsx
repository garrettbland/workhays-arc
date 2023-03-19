import { useEffect } from 'react'
import { Head } from '../components/Head'
import { Link } from 'react-router-dom'

export const Home = ({ serverData }: { serverData: any }) => {
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
            <div>Server data: {JSON.stringify(serverData)}</div>
            <div>Name: {serverData?.name}</div>
            <Link to="about?jobid=1234" className="text-blue-500 underline">
                Go to About
            </Link>
        </>
    )
}
