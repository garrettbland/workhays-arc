import indexFile from './index.html'
import { Template } from '@architect/views/template'
import { http } from '@architect/functions'

export const handler = async (req) => {
    const result = Template(indexFile, {
        pageTitle: 'Job Example',
        job: {
            title: 'Example job Title',
            id: req.pathParameters?.jobId,
        },
    })
    return {
        statusCode: 200,
        headers: {
            'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
            'content-type': 'text/html; charset=utf8',
        },
        body: result,
    }
}
