// import indexFile from './index.html'
// import { Template } from '@architect/views/template'

export const handler = async () => {
    // const result = Template(indexFile, {
    //     pageTitle: 'Contact Us',
    // })

    return {
        statusCode: 200,
        headers: {
            'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
            'content-type': 'text/html; charset=utf8',
        },
        body: '<div>result</div',
    }
}
