import { App } from '../App'
import { renderToString } from 'react-dom/server'
import { matchPath } from 'react-router-dom'
import { StaticRouter } from 'react-router-dom/server'
import { routes } from '../routes'
import { HttpRequest } from '@architect/functions/types/http'
import { Helmet } from 'react-helmet'
import serializeJavascript = require('serialize-javascript')

export const renderReact = async (req: HttpRequest): Promise<string> => {
    const activeRoute = routes.find((route) => matchPath(route.path, req.path))

    const promise = activeRoute?.fetchInitialData
        ? await activeRoute.fetchInitialData(req.path)
        : Promise.resolve()

    const rawHtml = renderToString(
        <StaticRouter location={req.path}>
            <App serverData={promise} />
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
                window.__SERVER_DATA__ = ${serializeJavascript(promise)}
              </script>
            </head>
            <body>
              <div id="root">${rawHtml}</div>
            </body>
            <script src="/_static/index.js"></script>
          </html>
        `
}
