import { App } from '../App'
import { renderToString } from 'react-dom/server'
import { matchPath } from 'react-router-dom'
import { StaticRouter } from 'react-router-dom/server'
import { routes } from '../routes'
import { HttpRequest, HttpResponse } from '@architect/functions/types/http'

export const renderReact = (req: HttpRequest): string => {
    const name = 'Work Hays'

    const activeRoute = routes.find((route) => matchPath(route.path, req.path)) || {}

    console.log({ activeRoute })

    const rawHtml = renderToString(
        <StaticRouter location={req.path}>
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
