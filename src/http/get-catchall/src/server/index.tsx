import { App } from '../App'
import { renderToString } from 'react-dom/server'
import { matchPath } from 'react-router-dom'
import { StaticRouter } from 'react-router-dom/server'
import { routes } from '../routes'
import { HttpRequest, HttpResponse } from '@architect/functions/types/http'
import { Helmet } from 'react-helmet'

export const renderReact = (req: HttpRequest): string => {
    const name = 'Work Hays'

    const activeRoute = routes.find((route) => matchPath(route.path, req.path)) || {}

    const rawHtml = renderToString(
        <StaticRouter location={req.path}>
            <App name={name} />
        </StaticRouter>
    )

    /**
     * Call Helmet `renderStatic` method after `renderToString`. This
     * allows us to render out the proper html <head> tags for SEO.
     *
     * https://www.npmjs.com/package/react-helmet
     */
    const helmet = Helmet.renderStatic()

    return `
          <html>
            <head>
              ${helmet.title.toString()}
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
