import { HttpRequest, HttpResponse } from '@architect/functions/types/http'
import { http } from '@architect/functions'
import { renderReact } from './src/server'

const main = async (req: HttpRequest, res: HttpResponse) => {
    return {
        statusCode: 200,
        headers: {
            'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
            'content-type': 'text/html; charset=utf8',
        },
        body: renderReact(req),
    }
}

export const handler = http.async(main)
