import { HttpRequest, HttpResponse } from '@architect/functions/types/http'
// import { html } from './pages/test'
import { generateServerStuff } from './main'

export const handler = async (req: HttpRequest, res: HttpResponse) => {
    return {
        statusCode: 200,
        headers: {
            'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
            'content-type': 'text/html; charset=utf8',
        },
        body: generateServerStuff(req),
    }
}
