// import { HttpRequest, HttpResponse } from '@architect/functions/types/http'

import { http } from '@architect/functions'
import { renderReact } from './render'

// HttpRequest, res: HttpResponse
const main = async (req, res) => {
    console.log('==> Returning server response...')
    console.log(`==> Route ${req.path}`)

    const html = await renderReact(req.path)

    return {
        statusCode: 200,
        headers: {
            'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
            'content-type': 'text/html; charset=utf8',
        },
        body: html,
    }
}

export const handler = http.async(main)
