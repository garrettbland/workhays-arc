// // learn more about HTTP functions here: https://arc.codes/http
import indexFile from './index.html'
import { Template } from '@architect/views/template'

export async function handler(req) {
    const result = Template(indexFile, { pageTitle: 'Work Hays' })

    return {
        statusCode: 200,
        headers: {
            'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
            'content-type': 'text/html; charset=utf8',
        },
        body: result,
    }
}
