import { HttpRequest, HttpResponse } from '@architect/functions/types/http'

// import { http } from '@architect/functions'
import { http } from '@architect/functions'

// import { renderReact } from './render'
// import { render } from 'squirrelly'
// import home from './home.html'
// import { Template } from './templates/template'
// const { readFile } = require('fs/promises')

// async function content(path) {
//     return await readFile(path, 'utf8')
// }

import Home from './pages/home'
import About from './pages/about'

const routes = [
    {
        path: '/',
        page: Home,
    },
    {
        path: '/about',
        page: About,
    },
]

// HttpRequest, res: HttpResponse
const main = async (req: HttpRequest, res: HttpResponse) => {
    console.log('==> Returning server response...')
    console.log(`==> Route ${req.path}`)

    const result = routes.find((item) => item.path === req.path)?.page(req)

    if (!result) {
        return {
            statusCode: 404,
            body: 'Not found...',
        }
    }

    // const html = await renderReact(req.path)

    // const result = Template(home, {
    //     pageTitle: 'Work Hays',
    //     activeJobs: [],
    //     // allRecords,
    //     // jobsByEmployer,
    //     // usersByEmployer,
    // })

    return {
        statusCode: 200,
        headers: {
            'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
            'content-type': 'text/html; charset=utf8',
        },
        body: result,
        // body: `
        //     <html>
        //         <head>
        //             <title>Something</title>
        //             <script src="/_static/index.js"></script>
        //         </head>
        //         <body>
        //             <h1>Welcome to work hays</h1>
        //             <x-header title="Gooooooo"></x-header>
        //         </body>
        //     </html>
        // `,
        // body: html,
    }
}

export const handler = http.async(main)
