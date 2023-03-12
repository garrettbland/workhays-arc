import { App } from './src/app'
import { renderToString } from 'react-dom/server'
import { matchPath } from 'react-router-dom'
import { StaticRouter } from 'react-router-dom/server'
import { routes } from './src/routes'
import { HttpRequest, HttpResponse } from '@architect/functions/types/http'

export const generateServerStuff = (req: HttpRequest): string => {
    const name = 'Work Hays'
    console.log(req['rawPath'])

    const activeRoute = routes.find((route) => matchPath(route.path, req['rawPath'])) || {}

    console.log({ activeRoute })

    const rawHtml = renderToString(
        <StaticRouter location={req['rawPath']}>
            <App name={name} />
        </StaticRouter>
    )

    return `
          <html>
            <head>
              <title>SSR</title>
              <link href="/_static/style.css" rel="stylesheet">
              
        <script>
          window.__INITIAL_DATA__ = { name: "${name}" }
        </script>
            </head>
            <body>
              <div id="root">${rawHtml}</div>
            </body>
            <script src="/_static/index.js"></script>
          </html>
        `
}
