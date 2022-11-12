// // learn more about HTTP functions here: https://arc.codes/http
// import { readFile } from 'fs/promises'
import { Template } from '@architect/views/template'

export async function handler(req) {
    // const view = await readFile('./index.html', { encoding: 'utf-8' })
    // console.log(view)

    const result = Template()

    return {
        statusCode: 200,
        headers: {
            'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
            'content-type': 'text/html; charset=utf8',
        },
        body: result,
    }
}
