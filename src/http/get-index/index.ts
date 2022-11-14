// // learn more about HTTP functions here: https://arc.codes/http
import { readFile } from 'fs/promises'
import indexFile from './index.html'
import { Template } from '@architect/views/template'

export async function handler(req) {
    // const view = await readFile(indexFile, { encoding: 'utf-8' }).then(
    //     (data) => data,
    //     (err) => console.log('ERRR')
    // )

    // if (!view) throw Error('Something went wrong reading file...')

    const result = Template(indexFile)

    return {
        statusCode: 200,
        headers: {
            'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
            'content-type': 'text/html; charset=utf8',
        },
        body: result,
    }
}
