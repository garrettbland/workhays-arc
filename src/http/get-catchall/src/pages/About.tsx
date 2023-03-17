import { useState, useEffect } from 'react'
import { getSomeData } from '../utils/fetchData'

export const About = ({ serverData = {} }: { serverData: any }) => {
    const initialItems = serverData?.data?.Items ?? []

    const [isLoading, setLoading] = useState(false)
    const [items, setItems] = useState(initialItems)
    useEffect(() => {
        console.log(`Current server data: ${JSON.stringify(serverData)}`)

        if (initialItems) {
            console.log('Not loaded from server...call api')
            setLoading(true)
            getSomeData().then((data) => {
                setItems(data?.data?.Items)
                setLoading(false)
            })
        }
    }, [])

    return (
        <>
            <div>Jobs</div>
            {isLoading && <div>Loading...</div>}
            {items.map((item: any) => (
                <div key={item.PK}>{item.PK}</div>
            ))}
        </>
    )
}
