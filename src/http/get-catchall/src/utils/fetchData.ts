import axios from 'axios'

export const getSomeData = async () => {
    const { data } = await axios.get('/api/v1/jobs', {
        baseURL: 'http://localhost:3333',
    })

    return {
        data,
    }
}
