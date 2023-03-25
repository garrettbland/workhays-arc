import { JSXElementConstructor } from 'react'

import { renderToString } from 'react-dom/server'
// import { Home, About } from './pages'
const serializeJavascript = require('serialize-javascript')
import { Home } from './pages/index'
import { About } from './pages/about'
import { Helmet } from 'react-helmet'

interface Route {
    path: string
    component: JSXElementConstructor<any>
    fetchInitialData?: () => Promise<any>
}

const getServerData = async () => {
    return {
        name: 'garrett yo',
    }
}

const routes = [
    {
        path: '/',
        component: Home,
        fetchInitialData: () => getServerData(),
    },
    {
        path: '/about',
        component: About,
    },
]

const HOC = ({ Component, initialData }: any) => {
    return <Component initialData={initialData} />
}

export const renderReact = async (path: string) => {
    const matchedRoute = routes.find((item) => item.path === path)

    const initialData = matchedRoute?.fetchInitialData
        ? await matchedRoute.fetchInitialData()
        : Promise.resolve()

    console.log(`Found route ${matchedRoute?.path}`)

    const rendered = renderToString(
        <HOC Component={matchedRoute?.component} initialData={initialData} />
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
            window.__SERVER_DATA__ = ${serializeJavascript(initialData)}
          </script>
        </head>
        <body>
          <div id="root">${rendered}</div>
          <script src="/_static/${path === '/' ? 'index' : path.replace('/', '')}.js"></script>
        </body>
      </html>
    `
}
